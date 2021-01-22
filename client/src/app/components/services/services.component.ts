import { SD_SERVICE } from './../../models/services';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit,  NgZone } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {MessageService} from "./../../shared/messageService";
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Sort } from '@angular/material/sort';




@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  Services: any = [];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  config:any;
  PipeData: any=[];
  toppings = new FormControl();
  isDelete:boolean;
  formSubmitAttempt:boolean;
  resetFormGroup:any;
  toppingArr:any=[];
  filtered=[];
  dataSource: MatTableDataSource<SD_SERVICE>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['SERVICE_NAME','action'];

  constructor(private router: Router,
    private commonSevice: ApiService, private actRoute: ActivatedRoute, private loader: Ng4LoadingSpinnerService, private ms: MessageService, private fb: FormBuilder, private ngZone:NgZone) { 

   
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
      this.Services = data;
      this.control = this.userTable.get('tableRows') as FormArray;

      for(let item of this.Services){
            
        const fbGroup=this.fb.group({
        _id:[item._id],
        SERVICE_NAME:[item.SERVICE_NAME,[Validators.required,RxwebValidators.unique()]],
        PIPE: [item.PIPE],
        isEditable: [false]
      });
      this.control.push(fbGroup);
      var URL="pipes/getAll";
       this.commonSevice.GetAll(URL).subscribe(data => {
      this.PipeData = data;
      if(this.PipeData.length > 0){
      this.PipeData=this.PipeData.sort((a,b)=>a.PIPE_NAME > b.PIPE_NAME ?1:-1 );
      }
      this.loader.hide();
    }, error =>{
      this.loader.hide();
    })     
    }    
    },error=>{
      this.loader.hide();
    })    
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Services.count
    };
  }
  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }
  
  retrievePipe(id:any){
    for(let item of this.PipeData){
      if(item._id === id){
        return item.PIPE_NAME;
      }
    }
    return '';
   }
   sortData(sort: Sort) {
    console.log(sort);
    if (!sort.active || sort.direction === '') {
      return;
    }
    if(sort.direction == 'asc'){
      if(sort.active == 'SERVICE_NAME'){
      this.getFormControls.controls.sort((a, b) => a.value.SERVICE_NAME > b.value.SERVICE_NAME ? 1 : -1);
      }
      if(sort.active == 'PIPE'){
        this.getFormControls.controls.sort((a, b) => a.value.PIPE > b.value.PIPE ? 1 : -1);

      }
    }else{
      if(sort.active == 'SERVICE_NAME'){
        this.getFormControls.controls.sort((a, b) => a.value.SERVICE_NAME < b.value.SERVICE_NAME ? 1 : -1);
      }
      if(sort.active == 'PIPE'){
        this.getFormControls.controls.sort((a, b) => a.value.PIPE < b.value.PIPE ? 1 : -1);

      }
    }

  }
   SelectServices(group:FormGroup, event:any,sel:any){
    if(event.isUserInput) {
      if(event.source._selected == false){
        if(group.value.PIPE.includes(event.source.value)){
          console.log("included");
          const index: number = group.value.PIPE.indexOf(event.source.value);
          if (index !== -1) {
            console.log("yes");
            group.value.PIPE.splice(index, 1);
          }                }

      }else{
      group.value.PIPE.push(event.source.value);
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
      SERVICE_NAME: ['', [Validators.required,RxwebValidators.unique()]],
      PIPE: this.fb.array([]),
      isEditable: [true]
    });
  }
  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.insert((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage),this.initiateForm());
    this.formSubmitAttempt=false;
    this.toppings.setValue([]);
    this.isDelete=false;
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
    this.deleteService(control,index,group);
   
  }

  editRow(group: FormGroup) {
    for(let formItem of this.getFormControls.controls){
      if(formItem.get('isEditable').value == true){
        formItem.get('isEditable').setValue(false);
      }
    }
    group.get('isEditable').setValue(true);
    this.toppingArr=[];
    console.log(group);
   this.toppings.setValue(group.value.PIPE);
   this.isDelete=true;
   this.resetFormGroup=group.value;
   for(let item of group.value.PIPE){
     this.toppingArr.push(item);
   }

   

  }
  cancel(group:FormGroup){

    group.reset(this.resetFormGroup);
    group.get('PIPE').setValue(this.toppingArr);

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
     this.submitAddServicesForm(group);
    }else{
      this.formSubmitAttempt=true;
     this.submitEditServicesForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  submitAddServicesForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var URL='service/add-service';
      this.commonSevice.Add(group.value,URL).subscribe(res => {
      
        this.ms.openSnackBar("Service is added successfully");
        group.get('isEditable').setValue(false);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/services/getAll'] );
   
      },error=>{
        this.loader.hide();
        this.ms.openSnackBar("Error performing action");

      });
    }
    else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required information");
    }
    
  }
  submitEditServicesForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var id = group.value._id;
      if (window.confirm('Are you sure you want to update?')) {
        var url = "service/edit-service";
        this.commonSevice.Update(id, group.value,url).subscribe( res => {
          this.ms.openSnackBar("Service is edited successfully");
          group.get('isEditable').setValue(false);
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/services/getAll'] );
          
        },error=>{
          this.loader.hide();
          this.ms.openSnackBar("Error Performing operation");

        });
      }
    }else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required information");

    }
  }
  deleteService(control:any,index:any,group:FormGroup){
    if(window.confirm('Are you sure')) {
      this.loader.show();
      var index=group.value._id;
      var url='service/delete-service';
      this.commonSevice.Delete(index,url).subscribe(data=>{
        if(data.msg == "success"){
        this.ms.openSnackBar("Service is deleted successfully");
        control.removeAt(index);
        this.loader.hide();
       

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/services/getAll'] );
    }else{
      this.loader.hide();
      this.ms.openSnackBar(data.msg);
    }
      },error=>{
        this.loader.hide();
      })
    }
  }


}
