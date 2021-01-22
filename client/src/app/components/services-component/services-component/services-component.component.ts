
import { SD_COMPONENT } from '../../../models/Components';
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
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css']
})
export class ServicesComponentComponent implements OnInit {

  Components: any = [];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  AllService:any;
  toppings = new FormControl();
  config:any;
  formSubmitAttempt:boolean;
  reset:any;
  resetFormGroup:any;
  toppingArr:any=[];
  isDelete:boolean;

 

  constructor(private ngZone:NgZone, private router: Router,private fb: FormBuilder,private commonSevice: ApiService,private loader:Ng4LoadingSpinnerService, private ms: MessageService) {
    
  }
  
  ngOnInit() { 
    this.isDelete=false;
    this.loader.show();

    this.formSubmitAttempt=false;
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
   
    var URL="services/getAll";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.AllService = data;
      if(this.AllService.length > 0){
      this.AllService=this.AllService.sort((a,b)=>a.SERVICE_NAME > b.SERVICE_NAME ?1:-1 );
      }
          // now call components 
          var URL="component/getAll";
          this.commonSevice.GetAll(URL).subscribe(data => {
            this.Components = data;
           
            this.control = this.userTable.get('tableRows') as FormArray;
            for(let item of this.Components){
            
            const fbGroup=this.fb.group({
            _id:[item._id],
            COMPONENT_NAME:[item.COMPONENT_NAME,[Validators.required,RxwebValidators.unique()]],
            SERVICE:[item.SERVICE],
            isEditable: [false]
          });
          this.control.push(fbGroup);
        }
          console.log(this.Components);
          },error =>{
            this.loader.hide();
          })
      this.loader.hide();
      console.log(this.AllService);
    },error=>{
      this.loader.hide();
    })  
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Components.count
    };
  }
  retrieveService(id:any){
   for(let item of this.AllService){
     if(item._id === id){
       return item.SERVICE_NAME;
     }
   }
   return '';
  }
  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }
  fieldGlobalIndex(index:any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  submitAddComponentsForm(group:FormGroup){
    this.loader.show();
    if(group.valid){
    var URL="component/add-component";
    this.commonSevice.Add(group.value,URL).subscribe(res => {
      group.get('isEditable').setValue(false);
      this.ms.openSnackBar("Component is added successfully");
      this.loader.hide();
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/component/getAll'] );
    },error=>{
      this.loader.hide();
    });
  }else{
    this.loader.hide();
    this.ms.openSnackBar("Please fill the required information");

  }
  }
  initiateForm(): FormGroup {
    return this.fb.group({
      COMPONENT_NAME: ['', [Validators.required,RxwebValidators.unique()]],
      SERVICE: this.fb.array([]),
      isEditable: [true]
    });
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    this.formSubmitAttempt=false;
    this.toppings.setValue([]);
    this.isDelete=false;

    
  }
  SelectServices(group:FormGroup, event:any,sel:any){
    if(event.isUserInput) {
      if(event.source._selected == false){
        if(group.value.SERVICE.includes(event.source.value)){
          console.log("included");
          const index: number = group.value.SERVICE.indexOf(event.source.value);
          if (index !== -1) {
            console.log("yes");
            group.value.SERVICE.splice(index, 1);
          }                }

      }else{
      group.value.SERVICE.push(event.source.value);
      }
      console.log(event.source._selected);
    }
    
   

  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
   this.deleteComponent(control,index,group);
   
  }

  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    group.get('isEditable').setValue(true);
    this.reset=group.getRawValue();
    console.log(group);
    this.toppings.setValue(group.value.SERVICE);
    this.formSubmitAttempt=false;
    this.isDelete=true;
    this.toppingArr=[];
    this.resetFormGroup=group.value;
   for(let item of group.value.SERVICE){
     this.toppingArr.push(item);
   }

  }
  cancel(group:FormGroup){

    group.reset(this.resetFormGroup);
    group.get('SERVICE').setValue(this.toppingArr);
    if(group.value._id == undefined){
      const control =  this.userTable.get('tableRows') as FormArray;
      control.removeAt((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage));
     
    }else{
    group.get('isEditable').setValue(false);
    }
    console.log(this.toppingArr);



 }
  doneRow(group: FormGroup) {
    console.log(group);
    if(group.value._id == undefined){
      this.formSubmitAttempt=true;
      this.submitAddComponentsForm(group);
    }else{
      this.formSubmitAttempt=true;
      this.submitEditComponentsForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  deleteComponent(control:any,index:any,group:FormGroup){
    this.loader.show();
    if(window.confirm('Are you sure')) {
      var url='component/delete-component';
      var index=group.value._id;
      console.log(index);
      if(index != undefined && index != ''){
      this.commonSevice.Delete(index,url).subscribe(data => {
        
        if(data.msg == "success"){
          control.removeAt(index);
        this.ms.openSnackBar("Component has been deleted");
        this.loader.hide();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/component/getAll'] );

        }
        else{
          this.ms.openSnackBar(data.msg);
          this.loader.hide();
        }
       
      },error=>{
        this.loader.hide();
      })
    }
    }
  }
 
  submitEditComponentsForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var id = group.value._id;
      if (window.confirm('Are you sure you want to update?')) {
        var url = "component/edit-component";
        this.commonSevice.Update(id, group.value,url).subscribe( res => {
          group.get('isEditable').setValue(false);
          this.ms.openSnackBar("Component is edited successfully");
          this.loader.hide();
          
          this.loader.hide();
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/component/getAll'] );
        });
      }
    }else{
      this.loader.hide();
      this.ms.openSnackBar("Please fill the required information");

    }
  }
  submitForm() {
    console.log(this.userTable.value);
   
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
   
  }
}
