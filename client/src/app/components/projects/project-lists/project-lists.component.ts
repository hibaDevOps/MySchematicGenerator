import { SD_PROJECTS } from '../../../models/Project';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ApiService } from '../../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MessageService} from "../../../shared/messageService";
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

import { MatChipInputEvent } from '@angular/material/chips';

import { $ } from 'protractor';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-project-lists',
  templateUrl: './project-lists.component.html',
  styleUrls: ['./project-lists.component.css']
})
export class ProjectListsComponent implements OnInit {

  Projects: any = [];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  config:any;
  PipeData: any=[];
  toppings = new FormControl();
  formSubmitAttempt:boolean;
  isDelete:boolean;
  resetFormGroup:any;
  filtered=[];
  dataSource: MatTableDataSource<SD_PROJECTS>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['PROJECT_NAME', 'PROCESS_Y_N', 'CONTRACTUAL_Y_N', 'action'];

  constructor(private ngZone:NgZone, private router: Router,private fb: FormBuilder,private commonSevice: ApiService,private loader:Ng4LoadingSpinnerService, private ms: MessageService) {
    
  }

  ngOnInit() {
    this.isDelete=false;
    this.formSubmitAttempt=false;
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    var URL = "project/getAll";
    this.loader.show();
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.Projects = data;
      if(this.Projects.length > 0){
        this.Projects=this.Projects.sort((a, b) => a.PROJECT_NAME > b.PROJECT_NAME ? 1 : -1);

      }
      this.control = this.userTable.get('tableRows') as FormArray;
       
      for(let item of this.Projects){
            
        const fbGroup=this.fb.group({
        _id:[item._id],
        PROJECT_NAME: [item.PROJECT_NAME,[Validators.required,RxwebValidators.unique()]],
        PROCESS_Y_N:[item.PROCESS_Y_N],
        CONTRACTUAL_Y_N:[item.CONTRACTUAL_Y_N],
        isEditable: [false]
      });
      if(fbGroup.value.PROCESS_Y_N == true || fbGroup.value.PROCESS_Y_N == 1){
        fbGroup.value.PROCESS_Y_N = 1;
      }else{
        fbGroup.value.PROCESS_Y_N = 0;
      }
      if(fbGroup.value.CONTRACTUAL_Y_N == true  || fbGroup.value.CONTRACTUAL_Y_N == 1){
        fbGroup.value.CONTRACTUAL_Y_N = 1;
      }else{
        fbGroup.value.CONTRACTUAL_Y_N = 0;
      }
      this.control.push(fbGroup);
    }
      
      this.loader.hide();
    }, error => {
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
  pageChanged(event){
    this.config.currentPage = event;
  }
  fieldGlobalIndex(index:any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  initiateForm(): FormGroup {
    return this.fb.group({
      PROJECT_NAME: ['', [Validators.required,RxwebValidators.unique()]],
      PROCESS_Y_N:[''],
      CONTRACTUAL_Y_N:[''],
      isEditable: [true]
    });
  }
  submitAddProjectsForm(group:FormGroup){
    this.loader.show();
    if(group.valid){
      var URL="project/add-project";
      if(group.value.PROCESS_Y_N == true || group.value.PROCESS_Y_N == 1){
        group.value.PROCESS_Y_N = 1;
      }else{
        group.value.PROCESS_Y_N = 0;
      }
      if(group.value.CONTRACTUAL_Y_N == true  || group.value.CONTRACTUAL_Y_N == 1){
        group.value.CONTRACTUAL_Y_N = 1;
      }else{
        group.value.CONTRACTUAL_Y_N = 0;
      }
      this.commonSevice.Add(group.value,URL).subscribe(res => {
        this.ms.openSnackBar("Project has been added");
        group.get('isEditable').setValue(false);
        this.loader.hide();
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/project/getAll'] );
      },error=>{
        this.ms.openSnackBar("Error performing operation");
        this.loader.hide();

      });
    }else{
      this.formSubmitAttempt=true;
      this.loader.hide();
      this.ms.openSnackBar("Please fill the required information");

    }
    }
    filterFormControls(term:any){
      console.log(term.target.value);
      if(term.target.value=='' || term.target.value ==' '){
        this.filtered=this.Projects;
  
      }else{
      this.filtered=this.Projects.filter(x=>x.PROJECT_NAME.indexOf(term.target.value) != -1);
      }
      this.touchedRows = [];
      this.userTable = this.fb.group({
        tableRows: this.fb.array([])
      });
      this.control = this.userTable.get('tableRows') as FormArray;
  
      for(let item of this.filtered){
            
        const fbGroup=this.fb.group({
          _id:[item._id],
          PROJECT_NAME: [item.PROJECT_NAME,[Validators.required,RxwebValidators.unique()]],
          PROCESS_Y_N:[item.PROCESS_Y_N],
          CONTRACTUAL_Y_N:[item.CONTRACTUAL_Y_N],
          isEditable: [false]
      });
      this.control.push(fbGroup);
    }
    }
    sortData(sort: Sort) {
      console.log(sort);
      if (!sort.active || sort.direction === '') {
        return;
      }
      if(sort.direction == 'asc'){
        this.getFormControls.controls.sort((a, b) => a.value.PROJECT_NAME > b.value.PROJECT_NAME ? 1 : -1);
      }else{
        this.getFormControls.controls.sort((a, b) => a.value.PROJECT_NAME < b.value.PROJECT_NAME ? 1 : -1);
  
      }
  
    }
  
  
  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    this.formSubmitAttempt=false;
    this.toppings.setValue([]);
    this.isDelete=false;
  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
    this.deleteProject(group);
   
  }

  processChange(event:any,group:FormGroup){
    console.log(event);
    if(event.checked){
    group.value.PROCESS_Y_N=1;
    }else{
      group.value.PROCESS_Y_N=0;

    }

  }
  submitEditProjectsForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var id = group.value._id;
      
      if (window.confirm('Are you sure you want to update?')) {
        if(group.value.PROCESS_Y_N == true || group.value.PROCESS_Y_N == 1){
          group.value.PROCESS_Y_N = 1;
        }else{
          group.value.PROCESS_Y_N = 0;
        }
        if(group.value.CONTRACTUAL_Y_N == true  || group.value.CONTRACTUAL_Y_N == 1){
          group.value.CONTRACTUAL_Y_N = 1;
        }else{
          group.value.CONTRACTUAL_Y_N = 0;
        }
        var url = "project/edit-project";
        console.log(group.value);
        this.commonSevice.Update(id, group.value,url).subscribe( res => {
          this.ms.openSnackBar("The project is edited successfully");
          group.get('isEditable').setValue(false);

          this.loader.hide();
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/project/getAll'] );
        
        },error=>{
          this.loader.hide();
          this.ms.openSnackBar("Error performaing operation");
        });
      }
    }
    else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required information");

    }
  }
  contractChange(event:any,group:FormGroup){
    if(event.checked){
      group.value.CONTRACTUAL_Y_N=1;
    }else{
      group.value.CONTRACTUAL_Y_N=0;
      }
  }

  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    group.get('isEditable').setValue(true);
    console.log(group);
    this.resetFormGroup=group.value;

    this.isDelete=true;

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
    this.submitAddProjectsForm(group);}
    else{
     this.submitEditProjectsForm(group);
    }
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  deleteProject(group:FormGroup) {
    if (window.confirm('Are you sure')) {
      this.loader.show();
      var index=group.value._id;
      var url = 'project/delete-project';
      this.commonSevice.Delete(index, url).subscribe(data => {
        this.ms.openSnackBar("Project is deleted successfully");
        this.loader.hide();
      })
    }
  }

  




}
