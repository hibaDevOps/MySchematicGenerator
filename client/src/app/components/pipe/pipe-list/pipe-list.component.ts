import { SD_SERVICE } from '../../../models/services';
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

@Component({
  selector: 'app-pipe-list',
  templateUrl: './pipe-list.component.html',
  styleUrls: ['./pipe-list.component.css']
})
export class PipeListComponent implements OnInit {

  Pipes: any = [];
  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  AllService:any;
  config:any;
  resetFormGroup:any;

  toppings = new FormControl();
  formSubmitAttempt:boolean;
  isDelete:boolean;
  toppingArr:any=[];
  dataSource: MatTableDataSource<SD_SERVICE>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['PIPE_NAME','action'];

  constructor(private ngZone:NgZone, private router: Router,private fb: FormBuilder,private commonSevice: ApiService,private loader:Ng4LoadingSpinnerService, private ms: MessageService) {
    this.loader.show();

  }
  
  ngOnInit() { 
    this.isDelete=false;
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
           var URL="pipes/getAll";
        this.commonSevice.GetAll(URL).subscribe(data => {
          this.Pipes = data;
        
          this.control = this.userTable.get('tableRows') as FormArray;
                for(let item of this.Pipes){
            
            const fbGroup=this.fb.group({
            _id:[item._id],
            PIPE_NAME:[item.PIPE_NAME,[Validators.required,RxwebValidators.unique()]],
            SERVICES:[item.SERVICES],
            isEditable: [false]
          });
          this.control.push(fbGroup);
        }
      this.loader.hide();
    },error=>{
      this.loader.hide();
    })   
  },error=>{
    this.loader.hide();
})
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.Pipes.count
    }; 
  }
  retrieveServices(id:any){
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
  pageChanged(event){
    this.config.currentPage = event;
  }
  fieldGlobalIndex(index:any) {
    return this.config.itemsPerPage * (this.config.currentPage - 1) + index;
  }
  
  initiateForm(): FormGroup {
    return this.fb.group({
      PIPE_NAME: ['', [Validators.required,RxwebValidators.unique()]],
      SERVICES: [[]],
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
  cancel(group:FormGroup){
    group.reset(this.resetFormGroup);
    group.get('SERVICES').setValue(this.toppingArr);
    if(group.value._id == undefined){
      const control =  this.userTable.get('tableRows') as FormArray;
      control.removeAt((this.config.itemsPerPage*this.config.currentPage)-(this.config.itemsPerPage));
     
    }else{
    group.get('isEditable').setValue(false);
    }    console.log(this.toppingArr);


 }
  SelectServices(group:FormGroup, event:any,sel:any){
    if(event.isUserInput) {
      if(event.source._selected == false){
        if(group.value.SERVICES.includes(event.source.value)){
          console.log("included");
          const index: number = group.value.SERVICES.indexOf(event.source.value);
          if (index !== -1) {
            console.log("yes");
            group.value.SERVICES.splice(index, 1);
          }                }

      }else{
      group.value.SERVICES.push(event.source.value);
      }
      console.log(event.source._selected);
    }
    
   

  }
  deleteRow(index: number,group: FormGroup) {
    const control =  this.userTable.get('tableRows') as FormArray;
   this.deletePipe(control,index,group);
   
  }
  submitEditPipesForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var id = group.value._id;
      if (window.confirm('Are you sure you want to update?')) {
        var url = "pipe/edit-pipe";
        this.commonSevice.Update(id, group.value,url).subscribe( res => {
          this.ms.openSnackBar("Pipe class is edited successfully");
          group.get('isEditable').setValue(false);

          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/pipes/getAll'] );
        },error=>{
          this.loader.hide();
          this.ms.openSnackBar("Error performing operation");

        });
      }
    }
    else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required fields");

    }
  }
  submitAddPipesForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var URL='pipe/add-pipe';
      this.commonSevice.Add(group.value,URL).subscribe(res => {
        this.ms.openSnackBar("Pipe Class is added successfully");
        group.get('isEditable').setValue(false);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/pipes/getAll'] );
        
      },error=>{
        this.loader.hide();
        this.ms.openSnackBar("Error performing operation");

      });
    }
    else{
      this.loader.hide();
      this.formSubmitAttempt=true;
      this.ms.openSnackBar("Please fill the required fields");

    }
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
   this.toppings.setValue(group.value.SERVICES);
   this.isDelete=true;
   this.resetFormGroup=group.value;
   for(let item of group.value.SERVICES){
     this.toppingArr.push(item);
   }

  }
  doneRow(group: FormGroup) {
    console.log(group);
    if(group.value._id == undefined){
      this.formSubmitAttempt=true;
     this.submitAddPipesForm(group);
    }else{
      this.formSubmitAttempt=true;
      this.submitEditPipesForm(group);
    }
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }
  deletePipe(control:any,index:any,group:FormGroup){
    this.loader.show();
    if(window.confirm('Are you sure')) {
      var index=group.value._id;
      var url='pipe/delete-pipe';
      this.commonSevice.Delete(index,url).subscribe(data=>{
        if(data.msg=="success"){
          control.removeAt(index);

          this.loader.hide();
          this.ms.openSnackBar("Pipe Class is deleted");
          this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/pipes/getAll'] );
        }else{
         this.loader.hide();
         this.ms.openSnackBar(data.msg);
        }
      
      },error => {
        this.loader.hide();
      })
    }
  }


}
