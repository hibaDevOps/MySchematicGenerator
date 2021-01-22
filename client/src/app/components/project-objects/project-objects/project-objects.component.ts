import { SD_PROJECT_OBJECT } from '../../../models/Objects';
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
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-project-objects',
  templateUrl: './project-objects.component.html',
  styleUrls: ['./project-objects.component.css']
})
export class ProjectObjectsComponent implements OnInit {

  Projects: any = [];
  projectId:string;
  services:any=[];
  components:any=[];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  config:any;
  toppings = new FormControl();
  formSubmitAttempt:boolean;
  dataSource: MatTableDataSource<SD_PROJECT_OBJECT>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['SERVICE_ID','COMPONENT_ID','SERVICE_ALIAS','action'];
  isDelete:boolean;
  resetFormGroup:any;
  projectName:string;

  constructor(private ngZone:NgZone, private actRoute:ActivatedRoute, private router: Router,private fb: FormBuilder,private commonSevice: ApiService,private loader:Ng4LoadingSpinnerService, private ms: MessageService) {
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.projectId=this.actRoute.snapshot.paramMap.get('id');

    this.loader.show();
 
    var url='project/read-project';
      this.commonSevice.GetById(this.projectId,url).subscribe(data => {

        this.projectName=data.PROJECT_NAME;
        
        },error=>{
          this.loader.hide();
        })    

    var URL="project_obj/getAll/"+this.projectId;
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.Projects = data;
      console.log(this.Projects);
      this.control = this.userTable.get('tableRows') as FormArray;

      for(let item of this.Projects){
            
        const fbGroup=this.fb.group({
        _id:[item._id],
        ID: [item.ID],
        COMPONENT_ID:[item.COMPONENT_ID,[Validators.required,RxwebValidators.unique()]],
        SERVICES:[item.SERVICES],
        SERVICE_ALIAS:[item.SERVICE_ALIAS],
        isEditable: [false]
        });
        this.control.push(fbGroup);
      }
     
      
    })    
  }
  
  ngOnInit() { 
    this.isDelete=false;
    this.formSubmitAttempt=false;
    var URL="services/getAll";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.services = data;
      if(this.services.length > 0){
        this.services=this.services.sort((a,b)=>a.SERVICE_NAME > b.SERVICE_NAME ?1:-1 );
        }
      
    })
    var URL="component/getAll";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.components = data;
      if(this.components.length > 0){
        this.components=this.components.sort((a,b)=>a.COMPONENT_NAME > b.COMPONENT_NAME ?1:-1 );
        }
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
  getServices(group:FormGroup,event:any){
  var isComponent=this.components.find(x=>x._id === event.source.value);
  if(isComponent != undefined && isComponent != null){
      
        group.value.SERVICES=isComponent.SERVICE;
        
        this.toppings.setValue(group.value.SERVICES);
        console.log( isComponent.SERVICE);
  }
  }
  SelectServices(group:FormGroup, event:any,sel:any){
    if(event.isUserInput) {
      if(event.source._selected == false){
        if(group.value.SERVICES.includes(event.source.value)){
          const index: number = group.value.SERVICES.indexOf(event.source.value);
          if (index !== -1) {
            group.value.SERVICES.splice(index, 1);
          }                }

      }else{
      group.value.SERVICES.push(event.source.value);
      }
      console.log(event.source._selected);
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
      COMPONENT_ID:['',[Validators.required,RxwebValidators.unique()]],
      SERVICES:[[]],
      SERVICE_ALIAS:[''],
      isEditable: [true]
    });
  }
  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    this.formSubmitAttempt=false;
    this.isDelete=false;
    this.toppings.setValue([]);

  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
    this.deleteProjectObject(group);
   
  }
  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    group.get('isEditable').setValue(true);
    console.log(group);
    this.toppings.setValue(group.value.SERVICES);
    this.isDelete=true;
    this.resetFormGroup=group.value;

    

  }
  doneRow(group: FormGroup) {
    console.log(group);
    if(group.value._id == undefined){
   this.submitAddProjectsObjForm(group);
  }
    else{
  this.submitEditProjectsObjForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
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
  retreiveService(id:any){
    for(let ser of this.services){
    
      if(ser._id == id){
        return ser.SERVICE_NAME;
      }
    }
    return '';

  }
  selectService(event:any,group:FormGroup){
    
    group.value.SERVICE_ID=event.value;
    
  }
  selectComponent(event:any,group:FormGroup){
    group.value.COMPONENT_ID=event.value;
    

  }
  submitAddProjectsObjForm(group:FormGroup){
    this.loader.show();
    if(group.valid){
    var URL="project_obj/add-project_obj";
    group.value.ID=this.projectId;
    group.value.SERVICES=this.toppings.value;
    this.commonSevice.Add(group.value,URL).subscribe(res => {
      this.ms.openSnackBar("The project object is added");
      group.get('isEditable').setValue(false);

      this.loader.hide();
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/project_obj/getAll/'+this.projectId] );
    });
  }
  else{
    this.loader.hide();
    this.formSubmitAttempt=true;
    this.ms.openSnackBar("Pleas fill the required information");

  }
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  retreiveComponent(id:any){
    for(let ser of this.components){
      if(ser._id == id){
        return ser.COMPONENT_NAME;
      }
    }
    return '';
  }
  submitEditProjectsObjForm(group:FormGroup) {
    if (group.valid) {
      this.loader.show();
      var id = group.value._id;
      var projectId=this.actRoute.snapshot.paramMap.get('id')
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_obj/edit-project_obj";
        this.commonSevice.UpdateBy(projectId,id, group.value,url).subscribe( res => {
          this.ms.openSnackBar("The project has been edited");
          group.get('isEditable').setValue(false);
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/project_obj/getAll/'+this.projectId] );
          });
      }
    }
    else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Pleas fill the required information");
  
    }
  }
  
  deleteProjectObject(group:FormGroup){
    if(window.confirm('Are you sure')) {
      this.loader.show();
      var index=group.value._id;
      var url='project_obj/delete-project_obj/'+this.projectId;
      this.commonSevice.Delete(index,url).subscribe(data=>{
        this.ms.openSnackBar("The project object is deleted");
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_obj/getAll/'+this.projectId] );
      })
    }
  }

}
