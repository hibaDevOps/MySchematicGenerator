import { SD_GENERAL_NOTES } from '../../../models/Notes';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ApiService } from '../../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MessageService} from "../../../shared/messageService";
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone,ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.css']
})
export class ProjectNotesComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  UploadFileInput: any;
  Projects: any = [];
  projectId:string;
  services:any=[];
  components:any=[];
  section:any=[];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  config:any;
  projectData:any;
  formSubmitAttempt:boolean;
  isDelete:boolean;
  resetFormGroup:any
  projectName:any;

  dataSource: MatTableDataSource<SD_GENERAL_NOTES>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['NOTE_TEXT','NOTE_CATEGORY','action'];

  constructor(private ngZone:NgZone, private actRoute:ActivatedRoute, private router: Router,private fb: FormBuilder,private commonSevice: ApiService,private loader:Ng4LoadingSpinnerService, private ms: MessageService) {
    this.loader.show();
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.projectId=this.actRoute.snapshot.paramMap.get('id');

    var url='project/read-project';
      this.commonSevice.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;

        this.projectName=data.PROJECT_NAME;
        
  },error=>{
    this.projectName='';
  })    
    var URL="project_notes/getAll/"+this.projectId;
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.Projects = data;
      this.control = this.userTable.get('tableRows') as FormArray;

      for(let item of this.Projects){
            
        const fbGroup=this.fb.group({
        _id:[item._id],
        ID: [item.ID],
        NOTE_TEXT:[item.NOTE_TEXT,[Validators.required]],
        NOTE_CATEGORY:[item.NOTE_CATEGORY,[Validators.required]],
        isEditable: [false]
        });
        this.control.push(fbGroup);
      }
      this.loader.hide();
    },error=>{
      this.loader.hide();
    })     

    var url='project/read-project';
      this.commonSevice.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;
        if(this.projectData.PROCESS_Y_N == 1){
          this.section.push("General");
          this.section.push("Mechanical");
          this.section.push("Process");
          this.section.push("Electrical");
          this.section.push("Communications");
        }
        else{
          this.section.push("General");
          this.section.push("Mechanical");
          this.section.push("Electrical");
          this.section.push("Communications");
        }
       
       
      
  })  
  }
  
  ngOnInit() {
    this.isDelete=false;
    this.formSubmitAttempt=false;
    this.projectId=this.actRoute.snapshot.paramMap.get('id');
 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Projects.count
    };  
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }
 
  submitAddProjectsNotesForm(group:FormGroup){
    if(group.valid){
    this.loader.show();
      var URL="project_notes/add-project_Notes";
     group.value.ID=this.projectId;
      console.log(group.value);

      this.commonSevice.Add(group.value,URL).subscribe(res => {
        this.ms.openSnackBar("Notes are added");
        group.get('isEditable').setValue(false);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_notes/getAll/'+this.projectId] );
      });
    }else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required information");

    }
    }
    submitEditProjectsNotesForm(group:FormGroup) {
      if (group.valid) {
        this.loader.show();
        var id = group.value._id;
        var projectId=this.actRoute.snapshot.paramMap.get('id')
        if (window.confirm('Are you sure you want to update?')) {
          var url = "project_notes/edit-project_notes";
          this.commonSevice.UpdateBy(projectId,id, group.value,url).subscribe( res => {
            this.loader.hide();
            group.get('isEditable').setValue(false);
            this.ms.openSnackBar("Notes are edited");
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
          }
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/project_notes/getAll/'+this.projectId] );          });
        }
      }
      else{
        this.loader.hide();
        this.formSubmitAttempt=true;
        this.ms.openSnackBar("Please fill the required information");

      }
    }
  pageChanged(event){
    this.config.currentPage = event;
  }
  fieldGlobalIndex(index:any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  initiateForm(): FormGroup {
    return this.fb.group({
      ID: [''],
      NOTE_TEXT:['',[Validators.required]],
      NOTE_CATEGORY:['',[Validators.required]],
      isEditable: [true]
    });
  }
  addRow() {
    this.isDelete=false;
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    
  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
    this.deleteProjectNotes(group);
   
  }
  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    this.isDelete=true;
    group.get('isEditable').setValue(true);
    console.log(group);
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
    if(group.value._id == undefined){
    this.submitAddProjectsNotesForm(group);
  }
    else{
     this.submitEditProjectsNotesForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  deleteProjectNotes(group:FormGroup){
    console.log(group.value);
    if(window.confirm('Are you sure')) {
      this.loader.show();
      var index=group.value._id;
      var url='project_notes/delete-project_notes/'+this.projectId;
      this.commonSevice.Delete(index,url).subscribe(data=>{
        this.ms.openSnackBar("Notes are deleted");
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_notes/getAll/'+this.projectId] );
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
          for (var row = 1; row < excelArray.length; row++) { 

            if (!this.isPresent(excelArray[row]["NOTES"]) ||
              !this.isPresent(excelArray[row]["__EMPTY"])){
              this.UploadFileInput = "";
              return;
            }

            var mechObj = new SD_GENERAL_NOTES();
            mechObj.ID = this.projectId;
            mechObj.NOTE_TEXT = excelArray[row]["NOTES"];
            mechObj.NOTE_CATEGORY = excelArray[row]["__EMPTY"];  

            mechInputArray.push(mechObj);
          }
          var URL = "project_notes/upload_notes";
          this.UploadFileInput = "";

          this.loader.show();
          this.commonSevice.Add(mechInputArray, URL).subscribe(res => {

            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
          }
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/project_notes/getAll/'+this.projectId] );
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

}
