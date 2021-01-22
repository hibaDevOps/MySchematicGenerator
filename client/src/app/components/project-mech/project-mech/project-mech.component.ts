import { SD_MECH_SCHEDULE } from '../../../models/Mech';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ApiService } from '../../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from "../../../shared/messageService";
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { COMMA, ENTER, V } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';




@Component({
  selector: 'app-project-mech',
  templateUrl: './project-mech.component.html',
  styleUrls: ['./project-mech.component.css']
})
export class ProjectMechComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;

  Projects: any = [];
  projectId: string;
  services: any = [];
  components: any = [];
  pipe_class: any = [];
  importedmech: any = [];
  newComp: any;
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  config: any;
  services_size: any = [];
  selectedService: any;
  selectedComponents: any;
  projectData: any = [];
  section: any = [];
  item_no: any = [];
  rev_issued: any = [];
  numbersList = [];
  level = [0, 1, 2, 3];
  UploadFileInput: any;
  alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  formSubmitAttempt:boolean;
  dataSource: MatTableDataSource<SD_MECH_SCHEDULE>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['COMPONENT_ID', 'REF_NO', 'LEVEL', 'SERVICE_DESCRIPTION', 'SERVICE_SIZE', 'PIPE_CLASS', 'CONNECTION_TYPE_SIZE', 'UM_TEMP_MIN', 'UM_TEMP_MAX', 'UM_TEMP_UNIT', 'UM_PRES_MIN', 'UM_PRES_MAX', 'UM_PRES_UNIT', 'UM_FLOW_MIN', 'UM_FLOW_MAX', 'UM_FLOW_UNIT', 'SERVICE_CONN', 'END_REF_NO', 'OPE', 'NOTES', 'action'];
  isDelete:boolean;
  projectName:any;
  resetFormGroup:any
  constructor(private ngZone: NgZone, private actRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private commonSevice: ApiService, private loader: Ng4LoadingSpinnerService, private ms: MessageService) {
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.projectId = this.actRoute.snapshot.paramMap.get('id');
    this.loader.show();
    var URL = "project_mech/getAll/" + this.projectId;
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.Projects = data;
      this.control = this.userTable.get('tableRows') as FormArray;
     
      for (let item of this.Projects) {
        
        const fbGroup = this.fb.group({
          _id: [item._id],
          ID: [item.ID],
          COMPONENT_ID: [item.COMPONENT_ID,[Validators.required]],
          REF_NO: [item.REF_NO,[Validators.required]],
          SETTPOC: [item.SETTPOC,[Validators.required]],
          LEVEL: [item.LEVEL,[Validators.required]],
          SERVICE_DESCRIPTION: [item.SERVICE_DESCRIPTION,[Validators.required]],
          SERVICE_SIZE: [item.SERVICE_SIZE,[Validators.pattern('^[0-9*\""]*$')]],

          PIPE_CLASS: [item.PIPE_CLASS,[Validators.required]],

          CONNECTION_TYPE_SIZE: [item.CONNECTION_TYPE_SIZE],
          CONNECTION_SIZE: [item.CONNECTION_SIZE],

          UM_TEMP_MIN: [item.UM_TEMP_MIN],

          UM_TEMP_MAX: [item.UM_TEMP_MAX],

          UM_TEMP_UNIT: [item.UM_TEMP_UNIT],

          UM_PRES_MIN: [item.UM_PRES_MIN],

          UM_PRES_MAX: [item.UM_PRES_MAX],

          UM_PRES_UNIT: [item.UM_PRES_UNIT],

          UM_FLOW_MIN: [item.UM_FLOW_MIN],

          UM_FLOW_MAX: [item.UM_FLOW_MAX],

          UM_FLOW_UNIT: [item.UM_FLOW_UNIT],

          SERVICE_CONN: [item.SERVICE_CONN],

          END_REF_NO: [item.END_REF_NO],

          OPE: [item.OPE],

          NOTES: [item.NOTES],
          isEditable: [false]
        });

        this.control.push(fbGroup);
      }

    }, error => {
      this.loader.hide();
    })

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Projects.count
    };
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  ngOnInit() {
    this.isDelete=false;
    this.formSubmitAttempt=false;
    var url = 'project/read-project';
    this.commonSevice.GetById(this.projectId, url).subscribe(data => {
      this.projectData = data;
      this.projectName=data.PROJECT_NAME;
      if (this.projectData.PROCESS_Y_N == 1) {
        this.section.push("Communications");
        this.section.push("Electrical");

        this.section.push("General");
        this.section.push("Mechanical");
        this.section.push("Process");
        
      }
      else {
        this.section.push("Communications");
        this.section.push("Electrical");

        this.section.push("General");
        this.section.push("Mechanical");
      }
      if (this.projectData.CONTRACTUAL_Y_N == 1) {
        this.rev_issued = this.numbersList;
      } else {
        this.rev_issued = this.alphaList;
      }
      this.item_no = ["00", "01", "02"];
    })
    var URL = "services/getAll";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.services = data;
      if(this.services.length > 0){
        this.services=this.services.sort((a,b)=>a.SERVICE_NAME > b.SERVICE_NAME ?1:-1 );
        }
    }, error => {
      this.loader.hide();
    })
    var URL = "component/getAll";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.components = data;
      if(this.components.length > 0){
        this.components=this.components.sort((a,b)=>a.COMPONENT_NAME > b.COMPONENT_NAME ?1:-1 );
        }

    }, error => {
      this.loader.hide();
    })


    var URL = "pipes/getAll";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.pipe_class = data;
      if(this.pipe_class.length > 0){
        this.pipe_class=this.pipe_class.sort((a,b)=>a.PIPE_NAME > b.PIPE_NAME ?1:-1 );
        }
      this.loader.hide();
    }, error => {
      this.loader.hide();
    })


  }
  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  fieldGlobalIndex(index: any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  initiateForm(): FormGroup {
    return this.fb.group({
      ID: [''],
      COMPONENT_ID: ['',[Validators.required]],
      REF_NO: ['',[Validators.required]],
      SETTPOC: ['',[Validators.required]],
      LEVEL: ['',[Validators.required]],
      SERVICE_DESCRIPTION: ['',[Validators.required]],
      SERVICE_SIZE: ['',[Validators.pattern('^[0-9*\""]*$')]],

      PIPE_CLASS: ['',[Validators.required]],

      CONNECTION_TYPE_SIZE: [''],
      CONNECTION_SIZE:[''],

      UM_TEMP_MIN: [''],

      UM_TEMP_MAX: [''],

      UM_TEMP_UNIT: [''],

      UM_PRES_MIN: [''],

      UM_PRES_MAX: [''],

      UM_PRES_UNIT: [''],

      UM_FLOW_MIN: [''],

      UM_FLOW_MAX: [''],

      UM_FLOW_UNIT: [''],

      SERVICE_CONN: [''],

      END_REF_NO: [''],

      OPE: [''],

      NOTES: [''],
      isEditable: [true]
    });
  }
  addRow() {
    const control = this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage * this.config.currentPage) - (this.config.itemsPerPage), this.initiateForm());
    this.formSubmitAttempt=false;
    this.isDelete=false;
  }
  deleteRow(index: number, group: FormGroup) {
    const control = this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
    this.deleteProjectMech(group);

  }
  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    group.get('isEditable').setValue(true);
    console.log(group);
    this.isDelete=true;
    this.resetFormGroup=group.value;


  }
  cancel(group:FormGroup){

    group.reset(this.resetFormGroup);
    if(group.value._id == undefined){
      const control =  this.userTable.get('tableRows') as FormArray;
      control.removeAt((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage));
     
    }else{
    group.get('isEditable').setValue(false);
    }

 }
  doneRow(group: FormGroup) {
    console.log(group);
    if (group.value._id == undefined) {
      this.submitAddProjectsMechForm(group);
    }
    else {
      this.submitEditProjectsMechForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  submitAddProjectsMechForm(group: FormGroup) {
    if(group.valid){
    this.loader.show();
    var URL = "project_mech/add-project_mech";
    group.value.ID = this.projectId;
    this.commonSevice.Add(group.value, URL).subscribe(res => {
      this.ms.openSnackBar("The Mechanical project is added");
      group.get('isEditable').setValue(false);

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/project_mech/getAll/'+this.projectId] );
    });
  }else{
    this.loader.hide();
    this.formSubmitAttempt=true;
    this.ms.openSnackBar("Please fill the required fields");
  }
  }
  submitEditProjectsMechForm(group: FormGroup) {
    if (group.valid) {
      this.loader.show();
      var id = group.value._id;
      var projectId = this.actRoute.snapshot.paramMap.get('id')
      group.value.ID = projectId;
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_mech/edit-project_mech";
        this.commonSevice.UpdateBy(projectId, id, group.value, url).subscribe(res => {
          this.loader.hide();
          group.get('isEditable').setValue(false);

          this.ms.openSnackBar("The Mechanical Schedule is edited");
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/project_mech/getAll/'+this.projectId] );     
         });
      }
    }
    else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required fields");
    }
  }
  async importData() {
    this.loader.show();

    var Url = "project-mech/google-sheet";
    this.commonSevice.GetAll(Url).subscribe(async data => {
     
      var size = Object.keys(data).length;

      for(var i = 0; i < size; i++){
        if(!this.isPresent(data[i][0]) || !this.isPresent(data[i][5]) || !this.isPresent(data[i][3]) || !this.isPresent(data[i][1]) || !this.isPresent(data[i][2])){
          this.loader.hide();
          this.ms.openSnackBar("Cannot load google sheet. Fill the required fields on google sheet");
          return false;
        }
      }
    
      for (var i = 0; i < size; i++) {
        var isComponent=this.components.find(x => x.COMPONENT_NAME === data[i][0]);
        if(isComponent != null){
          data[i][0]=isComponent._id;
        }else{
          await this.addComponent(data[i][0]);
          var isComponent=this.components.find(x => x.COMPONENT_NAME === data[i][0]);
          if(isComponent != null){
          data[i][0]=isComponent._id;
        }
        }
        var isService=this.services.find(x=>x.SERVICE_NAME === data[i][3]);
        if(isService != null){
          data[i][3]=isService._id;
        }else{
          await this.addService(data[i][3]);
          var isService=this.services.find(x=>x.SERVICE_NAME === data[i][3]);
        if(isService != null){
          data[i][3]=isService._id;
        }
        }
        var isPipeClass = this.pipe_class.find(x=>x.PIPE_NAME === data[i][5]);
        if(isPipeClass != null){
          data[i][5]=isPipeClass._id;
        }else{
          await this.addPipeClass(data[i][5]);
          var isPipeClass = this.pipe_class.find(x=>x.PIPE_NAME === data[i][5]);
        if(isPipeClass != null){
          data[i][5]=isPipeClass._id;
        }
        }
        this.control = this.userTable.get('tableRows') as FormArray;

        this.importedmech = this.fb.group({
          ID: [this.projectId],
          COMPONENT_ID: [data[i][0]],
          REF_NO: [data[i][1]],
          LEVEL: [data[i][2]],
          SERVICE_DESCRIPTION: [data[i][3]],
          SERVICE_SIZE: [data[i][4]],

          PIPE_CLASS: [data[i][5]],

          CONNECTION_TYPE_SIZE: [data[i][7]],
          CONNECTION_SIZE:[data[i][6]],

          UM_TEMP_MIN: [data[i][8]],

          UM_TEMP_MAX: [data[i][9]],

          UM_TEMP_UNIT: [data[i][10]],

          UM_PRES_MIN: [data[i][11]],

          UM_PRES_MAX: [data[i][12]],

          UM_PRES_UNIT: [data[i][13]],

          UM_FLOW_MIN: [data[i][14]],

          UM_FLOW_MAX: [data[i][15]],

          UM_FLOW_UNIT: [data[i][16]],

          SERVICE_CONN: [data[i][17]],

          END_REF_NO: [data[i][18]],

          OPE: [data[i][19]],

          NOTES: [data[i][20]],
          isEditable: [false]

        })

        var URL = "project_mech/add-project_mech";

        this.commonSevice.Add(this.importedmech.value, URL).subscribe(res => {
          this.control.push(this.importedmech);
        
        });


      }
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/project_mech/getAll/'+this.projectId] );
      this.loader.hide();
     this.ms.openSnackBar("The Google sheet for mechanical projects has been imported");
    });

      

    
  }
  retreiveService(id: any) {
    for (let ser of this.services) {
      if (ser._id == id) {
        return ser.SERVICE_NAME;
      }
    }
    return '';

  }
  retreiveComponent(id: any) {
    for (let ser of this.components) {
      if (ser._id == id) {
        return ser.COMPONENT_NAME;
      }
    }
    return '';
  }
  retreivePipeClass(id: any) {
    for (let ser of this.pipe_class) {

      if (ser._id == id) {
        return ser.PIPE_NAME;
      }
    }
    return '';

  }
  async addComponent(componentName: any) {
    var URL = "component/add-component";
    var comp = this.fb.group({
      COMPONENT_NAME: [componentName]
    })
    this.commonSevice.Add(comp.value, URL).subscribe(res => {
      
    }, error => {
      this.loader.hide();
    });

  }
  async addService(componentName: any) {
    var URL='service/add-service';
    var comp = this.fb.group({
      SERVICE_NAME: [componentName]
    })
      this.commonSevice.Add(comp.value,URL).subscribe(res => {
      },error=>{
        this.loader.hide();

      });

  }
  async addPipeClass(componentName: any) {
      var URL='pipe/add-pipe';
      var comp = this.fb.group({
        PIPE_NAME: [componentName]
      })
      this.commonSevice.Add(comp.value,URL).subscribe(res => {
        
      },error=>{
        this.loader.hide();

      });
    

  }
  deleteProjectMech(group: FormGroup) {
    if (window.confirm('Are you sure')) {
      this.loader.show();
      var index = group.value._id;
      var url = 'project_mech/delete-project_mech/' + this.projectId;
      this.commonSevice.Delete(index, url).subscribe(data => {
        this.ms.openSnackBar("The mechanical sheet is deleted");
        this.loader.hide();
      })
    }
  }


  onFileSelect(event) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);

      // if (!_.includes(af, file.type)) {
      //   alert('Upload excel document only.');


      // } else {
        console.log(file);


        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        //const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});

          
          const dataString = JSON.stringify(jsonData);
          var exceData = JSON.parse(dataString);
          var excelArray = JSON.parse(dataString).Sheet1;
          var colName = "__EMPTY_";
          var cellData;
          var mechInputArray = [];
          for (var row = 3; row < excelArray.length; row++) {
            //for(var j=0; j < 20; j++){
            //  if (j == 0) colName = "__EMPTY";
            //else colName = "__EMPTY_" + j.toString();
            //cellData = excelArray[row][colName];

            if (!this.isPresent(excelArray[row]["SCHEDULE"]) ||
              !this.isPresent(excelArray[row]["__EMPTY"]) ||
              !this.isPresent(excelArray[row][colName + "1"]) ||
              !this.isPresent(excelArray[row][colName + "2"]) ||
              !this.isPresent(excelArray[row][colName + "3"]) ||
              !this.isPresent(excelArray[row][colName + "5"])) {
                alert('Component, Ref, service, pipe and level are required');
              this.UploadFileInput = "";
              return;
            }

            if ( !this.is_Numeric(excelArray[row]["__EMPTY"]) ||
              !this.is_Numeric(excelArray[row][colName + "2"])) {
                alert('Ref and level must be numeric');
              this.UploadFileInput = "";
              return;
            }



            var mechObj = new SD_MECH_SCHEDULE();
            mechObj.ID = this.projectId;
            mechObj.COMPONENT_ID = excelArray[row]["SCHEDULE"];
            mechObj.REF_NO = excelArray[row]["__EMPTY"];
            mechObj.SETTPOC = excelArray[row][colName + "1"];
            mechObj.LEVEL = excelArray[row][colName + "2"];
            mechObj.SERVICE_DESCRIPTION = excelArray[row][colName + "3"];
            mechObj.SERVICE_SIZE = excelArray[row][colName + "4"];
            mechObj.PIPE_CLASS = excelArray[row][colName + "5"];
            mechObj.CONNECTION_TYPE_SIZE = excelArray[row][colName + "7"];
            mechObj.CONNECTION_SIZE = excelArray[row][colName + "6"];
            mechObj.UM_TEMP_MIN = excelArray[row][colName + "8"];
            mechObj.UM_TEMP_MAX = excelArray[row][colName + "9"];
            mechObj.UM_TEMP_UNIT = excelArray[row][colName + "10"];
            mechObj.UM_PRES_MIN = excelArray[row][colName + "11"];
            mechObj.UM_PRES_MAX = excelArray[row][colName + "12"];
            mechObj.UM_PRES_UNIT = excelArray[row][colName + "13"];
            mechObj.UM_FLOW_MIN = excelArray[row][colName + "14"];
            mechObj.UM_FLOW_MAX = excelArray[row][colName + "15"];
            mechObj.UM_FLOW_UNIT = excelArray[row][colName + "16"];
            mechObj.SERVICE_CONN = excelArray[row][colName + "17"];
            mechObj.END_REF_NO = excelArray[row][colName + "18"];
            mechObj.OPE = excelArray[row][colName + "19"];
            mechObj.NOTES = excelArray[row][colName + "20"];


            if(mechObj.LEVEL > 2) mechObj.LEVEL = 2;
            else if(mechObj.LEVEL < 0) mechObj.LEVEL = 0;

            mechInputArray.push(mechObj);
          }
          var URL = "project_mech/upload_excel-project_mech";
          this.UploadFileInput = "";

          this.loader.show();
          this.commonSevice.Add(mechInputArray, URL).subscribe(res => {

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
          }
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/project_mech/getAll/'+this.projectId] );
            this.loader.hide();
           this.ms.openSnackBar("Data imported successfully");
 
            
          }, error => {
            console.log(error);
            this.loader.hide();
          });


        }
        reader.readAsBinaryString(file);
     // }
    }
  }

  isPresent(value) {

    if (typeof (value) == "string") {
      if (value == undefined || value == null || value.trim() == "")
        return false;
    } else {
      if (value == undefined || value == null)
        return false;
    }
    return true;
  }

   is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

}
