import { SD_PROJECTS_REV } from '../../../models/Project_rev';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ApiService } from '../../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MessageService} from "../../../shared/messageService";
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';



@Component({
  selector: 'app-project-revisions',
  templateUrl: './project-revisions.component.html',
  styleUrls: ['./project-revisions.component.css']
})
export class ProjectRevisionsComponent implements OnInit {

  Projects: any = [];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  config:any;
  PipeData: any=[];
  projectId:string;
  numbersList=[];
  revno=[];
  projectData:any;
  formSubmitAttempt:boolean;
  isDelete:boolean;
  resetFormGroup:any;
  alphaList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  dataSource: MatTableDataSource<SD_PROJECTS_REV>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['REV_NAME','REV_NO','action'];
  projectName:String;

  constructor(private ngZone:NgZone, private actRoute:ActivatedRoute, private router: Router,private fb: FormBuilder,private commonSevice: ApiService,private loader:Ng4LoadingSpinnerService, private ms: MessageService) {
  }
  
  ngOnInit() {
    this.isDelete=false;
    this.formSubmitAttempt=false;
    console.log("ng");
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    for (var i = 1; i <= 100; i++) {
      this.numbersList.push(i);
   }
    this.loader.show();

    this.projectId=this.actRoute.snapshot.paramMap.get('id');
      var url='project/read-project';
      this.commonSevice.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;

        this.projectName=data.PROJECT_NAME;
        if(this.projectData.CONTRACTUAL_Y_N == 1){
                 this.revno=this.numbersList;
        }else{
          this.revno=this.alphaList;
        }
  },error=>{
    this.loader.hide();
  })    

    var URL="project_rev/getAll/"+this.projectId;
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.Projects = data;
      this.control = this.userTable.get('tableRows') as FormArray;

      for(let item of this.Projects){
            
        const fbGroup=this.fb.group({
        _id:[item._id],
        ID: [item.ID],
        REV_NAME:[item.REV_NAME,[Validators.required]],
        REV_NO:[item.REV_NO,[Validators.required]],
        DATE_REV:[item.DATE_REV,[Validators.required]],
        isEditable: [false]
        });
        this.control.push(fbGroup);
      }
      this.loader.hide();
    },error=>{
      this.loader.hide();
    })  
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Projects.count
    };  
   }
   ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }
  selectRevNo(event:any,group:FormGroup){
   
     group.value.REV_NO=event.value;
    
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  formatDate(e,group:FormGroup) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    group.get('DATE_REV').setValue(convertDate, {
      onlyself: true
    })
  }  
  formatDateDisplay(e:any){
    if(e == ''){
      return '';
    }else{
    return new Date(e).toISOString().substring(0, 10);
    }
  }
  fieldGlobalIndex(index:any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  initiateForm(): FormGroup {
    return this.fb.group({
      ID: [''],
      REV_NAME:['',[Validators.required]],
      REV_NO:['',[Validators.required]],
      DATE_REV:['',[Validators.required]],

      isEditable: [true]
    });
  }
  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    this.formSubmitAttempt=false;
    this.isDelete=false;
    
  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
    this.deleteProjectRevision(group);
   
  }
  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    var letters = /^[A-Z]+$/
    if(group.value.REV_NO != null){
    if(group.value.REV_NO.match(letters)){
      group.get('REV_NO').setValue(group.value.REV_NO);

    }else{
      group.get('REV_NO').setValue(parseInt(group.value.REV_NO));

    }
  }
    group.get('isEditable').setValue(true);
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
    if(group.value._id == undefined){
    this.submitAddProjectsRevForm(group);
  }
    else{
   this.submitEditProjectsRevForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  submitAddProjectsRevForm(group:FormGroup){
    this.loader.show();
    if(group.valid){
      var URL="project_rev/add-project_rev";
      console.log(group.value);
      group.value.ID=this.projectId;
      this.commonSevice.Add(group.value,URL).subscribe(res => {
        group.get('isEditable').setValue(false);

        this.ms.openSnackBar("The project Revision is added");
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_rev/getAll/'+this.projectId] );
       
      });
    }else{
      this.formSubmitAttempt=true;
      this.loader.hide();
      this.ms.openSnackBar("Please fill the required fields");


    }
    }
    submitEditProjectsRevForm(group:FormGroup) {
    
      if (group.valid) {
        this.loader.show();
        var id = group.value._id;
        var projectId=this.actRoute.snapshot.paramMap.get('id')
        if (window.confirm('Are you sure you want to update?')) {
          var url = "project_rev/edit-project_rev";
          this.commonSevice.UpdateBy(projectId,id, group.value,url).subscribe( res => {
            group.get('isEditable').setValue(false);

            this.ms.openSnackBar("The project revision is edited");
            this.loader.hide();
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
          }
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/project_rev/getAll/'+this.projectId] );
                     });
        }
      }
      else{
        this.loader.hide();
        this.formSubmitAttempt=true;
        this.ms.openSnackBar("Please fill the required fields");


      }
    }
  deleteProjectRevision(group:FormGroup){
    if(window.confirm('Are you sure')) {
      this.loader.show();
      var index=group.value._id;
      var url='project_rev/delete-project_rev/'+this.projectId;
      this.commonSevice.Delete(index,url).subscribe(data=>{
        this.ms.openSnackBar("Project is deleted");
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_rev/getAll/'+this.projectId] );
       
        this.loader.hide();
      },error=>{
        this.loader.hide();

      })
    }
  }


}
