import { SD_SERVICE_SIZES } from './../../models/services_size';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit,  NgZone } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, Form } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {MessageService} from "./../../shared/messageService";
import { Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-services-size',
  templateUrl: './services-size.component.html',
  styleUrls: ['./services-size.component.css']
})
export class ServicesSizeComponent implements OnInit {

  userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  term:string;
  touchedRows: any;
  ServicesSize: any = [];
  filtered:any=[];
  dataSource: MatTableDataSource<SD_SERVICE_SIZES>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['SIZE_VALUE','action'];
  config:any;
  isDelete:boolean;
  formSubmitAttempt:boolean;
  resetFormGroup:any;
  filteredProperties$: Observable<FormControl>;



  constructor(private router: Router,
    private commonSevice: ApiService, private actRoute: ActivatedRoute, private loader: Ng4LoadingSpinnerService, private ms: MessageService, private fb: FormBuilder, private ngZone:NgZone) { 
      this.loader.show();
  }

  ngOnInit() { 
    console.log("ngOnit");

    this.formSubmitAttempt=false;
    this.isDelete=false;
    this.loader.show();

    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });

    var URL="get-all-services-size";
    this.commonSevice.GetAll(URL).subscribe(data => {
      this.ServicesSize = data;
      this.control = this.userTable.get('tableRows') as FormArray;

      for(let item of this.ServicesSize){
            
        const fbGroup=this.fb.group({
        _id:[item._id],
        SIZE_VALUE:[item.SIZE_VALUE,[Validators.required, Validators.pattern('^[0-9*\""]*$')]],
        isEditable: [false]
      });
      this.control.push(fbGroup);
      this.loader.hide();
    }    
    this.dataSource = new MatTableDataSource<SD_SERVICE_SIZES>(this.ServicesSize);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 0);
    },error=>{
      this.loader.hide()
    })
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.ServicesSize.count
    };
    console.log(this.getFormControls.controls);
  }
  filterFormControls(term:any){
    console.log(term.target.value);
    if(term.target.value=='' || term.target.value ==' '){
      this.filtered=this.ServicesSize;

    }else{
    this.filtered=this.ServicesSize.filter(x=>x.SIZE_VALUE.indexOf(term.target.value) != -1);
    }
    this.touchedRows = [];
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.control = this.userTable.get('tableRows') as FormArray;

    for(let item of this.filtered){
          
      const fbGroup=this.fb.group({
      _id:[item._id],
      SIZE_VALUE:[item.SIZE_VALUE,[Validators.required, Validators.pattern('^[0-9*\""]*$')]],
      isEditable: [false]
    });
    this.control.push(fbGroup);
  }
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
      SIZE_VALUE: ['', [Validators.required, Validators.pattern('^[0-9*\""]*$')]],
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
    this.deleteServiceSize(group);
   
  }

  sortData(sort: Sort) {
    console.log(sort);
    if (!sort.active || sort.direction === '') {
      return;
    }
    if(sort.direction == 'asc'){
      this.getFormControls.controls.sort((a, b) => a.value.SIZE_VALUE > b.value.SIZE_VALUE ? 1 : -1);
    }else{
      this.getFormControls.controls.sort((a, b) => a.value.SIZE_VALUE < b.value.SIZE_VALUE ? 1 : -1);

    }

  }



 compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
   // this.toppings.setValue(group.value.SERVICE);

  }
  doneRow(group: FormGroup) {
    console.log(group);
    if(group.value._id == undefined){
      this.formSubmitAttempt=true;
     this.submitServicesForm(group);
    }else{
      this.formSubmitAttempt=true;
     this.submitEditServicesForm(group);
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
  deleteServiceSize(group:FormGroup){

    if(window.confirm('Are you sure')) {
      this.loader.show();
      var index=group.value._id
      var url='delete-service-value';
      this.commonSevice.Delete(index,url).subscribe(data=>{
        this.ms.openSnackBar("The size value is deleted");
        this.loader.hide();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/get-all-services-size'] );
      },error=>{
         this.loader.hide;
      })
    }
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.control.controls[controlName].hasError(errorName);
  }
  submitEditServicesForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var id = group.value._id;
      if (window.confirm('Are you sure you want to update?')) {
        var url = "edit-services-value";
        this.commonSevice.Update(id, group.value,url).subscribe( res => {
        this.ms.openSnackBar("Service Size is edited successfully");
        group.get('isEditable').setValue(false);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/get-all-services-size'] );
        },error=>{
          this.loader.hide();
          this.ms.openSnackBar("Error Performing operation");
        });
      }
    }else{
      this.loader.hide();
      this.ms.openSnackBar("Please fill the required information");
    }
  }
  submitServicesForm(group:FormGroup) {
    this.loader.show();
    if (group.valid) {
      var URL='add-services_size';
      this.commonSevice.Add(group.value,URL).subscribe(res => {
        this.ms.openSnackBar("Service size added successfully");
        group.get('isEditable').setValue(false);
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/get-all-services-size'] );
      },error=>{
        this.loader.hide();
        this.ms.openSnackBar("Error perfroming operation");
      });
    }
    else{
      this.loader.hide();
      this.ms.openSnackBar("Please fill the required information");
      

    }
  }
}
