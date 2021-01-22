import { FormBuilder, FormGroup, FormArray, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone,ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import { SD_SHEET_REGISTER } from '../../../models/Sheets';

@Component({
  selector: 'app-project-register-sheet',
  templateUrl: './project-register-sheet.component.html',
  styleUrls: ['./project-register-sheet.component.css']
})
export class ProjectRegisterSheetComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  UploadFileInput: any;

  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  projectId:any;
  projects:any;
  project: FormGroup;
  services:any=[];
  selectedService:any;
  components:any=[];
  selectedComponents:any;
  projectData:any=[];
  section:any=[];
  item_no:any=[];
  rev_issued:any=[];
  numbersList=[];
  formSubmitAttempt:boolean;
  config:any;
  isDelete:boolean;
  resetFormGroup:any
  projectName:any;
  alphaList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  constructor(    private router: Router,
    private commonSevice: ApiService, private actRoute: ActivatedRoute, private loader: Ng4LoadingSpinnerService, private ms: MessageService, private fb: FormBuilder, private ngZone:NgZone) { 
     
    }

  ngOnInit(): void {
    this.isDelete=false;
    this.config ={
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 0
    }
    
    this.formSubmitAttempt=false;
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
      this.projectId=this.actRoute.snapshot.paramMap.get('id');
     this.loader.show();
      var URL="project_sheet/getAll/"+this.projectId;
      this.commonSevice.GetAll(URL).subscribe(data => {
       this.projects=data;
       this.config ={
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.projects.count
      }
      
       this.control = this.userTable.get('tableRows') as FormArray;
       for(let item of this.projects){
       const fbGroup=this.fb.group({
        _id:[item._id],
        ID: [item.ID],
        ITEM_NAME:[item.ITEM_NAME,[Validators.required]],
        DESCRIPTION_A:[item.DESCRIPTION_A,[Validators.required]],
        DESCRIPTION_B:[item.DESCRIPTION_B],
        DESCRIPTION_C:[item.DESCRIPTION_C],
        SECTION:[item.SECTION,[Validators.required]],
        ITEM_NO:[item.ITEM_NO,[Validators.required]],
        DATE_ISSUED:[item.DATE_ISSUED,[Validators.required]],
        REV_ISSUED:[item.REV_ISSUED],
        isEditable: [false]
      });
      this.control.push(fbGroup);
    }
       console.log(data);
       console.log(this.projects);
     
      },error=>{
        this.loader.hide();
      })  
     
    var url='project/read-project';
      this.commonSevice.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;
        this.projectName=data.PROJECT_NAME;
        if(this.projectData.PROCESS_Y_N == 1){
          this.section.push("Communications");
          this.section.push("Electrical");
          this.section.push("General");
          this.section.push("Mechanical");
          this.section.push("Process");

        }
        else{
          this.section.push("Communications");
          this.section.push("Electrical");
          this.section.push("General");
          this.section.push("Mechanical");
        }
        if(this.projectData.CONTRACTUAL_Y_N == 1){
           this.rev_issued=this.numbersList;
        }else{
          this.rev_issued=this.alphaList;
        }
        this.item_no=["00","01","02","03","04","05","06","07","08","09","10"];
        console.log(this.projectData);
       
      
  })    
 
   
  }
  
  ngAfterOnInit() {
    
    this.control = this.userTable.get('tableRows') as FormArray;
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  formatDate(e,group:FormGroup) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    group.get('DATE_ISSUED').setValue(convertDate, {
      onlyself: true
    })
  }  
  submitEditProjectsSheetForm(group:FormGroup) {
     if(group.valid){
      this.loader.show();
      var id = group.value._id;
      var projectId=this.actRoute.snapshot.paramMap.get('id')
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_sheet/edit-project_sheet";
        console.log(this.projects.value);
        this.commonSevice.UpdateBy(projectId,id, group.value,url).subscribe( res => {
          this.ms.openSnackBar("The Register Sheet is edited");
          group.get('isEditable').setValue(false);
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/project_sheet/getAll/'+this.projectId] );
        });
      }
  }
  else{
    this.loader.hide();
    this.formSubmitAttempt=true;
    this.ms.openSnackBar("Please fill the required information");
  }
  }
  fieldGlobalIndex(index:any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  initiateForm(): FormGroup {
    return this.fb.group({
      ID: [''],
      ITEM_NAME:['',[Validators.required]],
      DESCRIPTION_A:['',[Validators.required]],
      DESCRIPTION_B:[''],
      DESCRIPTION_C:[''],
      SECTION:['',[Validators.required]],
      ITEM_NO:['',[Validators.required]],
      DATE_ISSUED:['',[Validators.required]],
      REV_ISSUED:[''],
      isEditable: [true]
    });
  }

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    this.isDelete=false;
    this.formSubmitAttempt=false;
    
  }
  deleteProjectSheet(group:FormGroup){
    if(window.confirm('Are you sure')) {
      this.loader.show();
      var url='project_sheet/delete-project_sheet/'+this.projectId;
      var index=group.value._id;
      console.log(index);
      if(index != undefined && index != ''){
      this.commonSevice.Delete(index,url).subscribe(data=>{
        this.ms.openSnackBar("The register sheet is deleted");
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_sheet/getAll/'+this.projectId] );
        this.loader.hide();
      })
    }else{
      this.loader.hide();
    }
    }
  }

  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
    this.deleteProjectSheet(group);

  }

  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    this.isDelete=true;
    group.get('isEditable').setValue(true);
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
    if(group.value._id == undefined){
    this.saveUserDetails(group);
    }else{
      this.submitEditProjectsSheetForm(group);
    }
  }

  saveUserDetails(group:FormGroup) {
    console.log(this.userTable.value);
    if(group.valid){
    this.loader.show();
    var URL="project_sheet/add-project_sheet";
    group.get('ID').setValue(this.projectId);
    this.commonSevice.Add(group.value,URL).subscribe(res => {
      this.ms.openSnackBar("The register sheet is added");
      group.get('isEditable').setValue(false);
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/project_sheet/getAll/'+this.projectId] );
    });
    }else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required information");
    }
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    console.log(this.userTable.value);
   
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
   
  }

  toggleTheme() {
    this.mode = !this.mode;
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
          workBook = XLSX.read(data, { type: 'binary' , cellDates: true});
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
          for (var row = 1; row < excelArray.length; row++) {
            //for(var j=0; j < 20; j++){
            //  if (j == 0) colName = "__EMPTY";
            //else colName = "__EMPTY_" + j.toString();
            //cellData = excelArray[row][colName];

            if (!this.isPresent(excelArray[row]["PROJECT REGISTER SHEETS"]) || 
              !this.isPresent(excelArray[row][colName + "3"]) ||
              !this.isPresent(excelArray[row][colName + "4"]) ||
              !this.isPresent(excelArray[row][colName + "5"])) {
                alert('Item Name, Section, Item No, Date Issued are required');
              this.UploadFileInput = "";
              return;
            }

            var dateIssued = new Date(excelArray[row][colName + "5"]);
            if (isNaN(dateIssued.getTime())) {  
              alert('Date Issued is not a valid date');
              this.UploadFileInput = "";
              return;
          } 
             

            var mechObj = new SD_SHEET_REGISTER();
            mechObj.ID = this.projectId;
            mechObj.ITEM_NAME = excelArray[row]["PROJECT REGISTER SHEETS"];
            mechObj.DESCRIPTION_A = excelArray[row]["__EMPTY"];
            mechObj.DESCRIPTION_B = excelArray[row][colName + "1"];
            mechObj.DESCRIPTION_C = excelArray[row][colName + "2"];
            mechObj.SECTION = excelArray[row][colName + "3"];
            mechObj.ITEM_NO = excelArray[row][colName + "4"];
            mechObj.DATE_ISSUED =  dateIssued;
            mechObj.REV_ISSUED = excelArray[row][colName + "6"]; 
            mechInputArray.push(mechObj);
          }
          var URL = "project_sheet/upload_sheets";
          this.UploadFileInput = "";

          this.loader.show();
          this.commonSevice.Add(mechInputArray, URL).subscribe(res => {

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
          }
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/project_sheet/getAll/'+this.projectId] );
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



