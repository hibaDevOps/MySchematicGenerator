import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-edit-project-objects',
  templateUrl: './edit-project-objects.component.html',
  styleUrls: ['./edit-project-objects.component.css']
})
export class EditProjectObjectsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetComponentsForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  services:any=[];
  selectedService:any;
  components:any=[];
  selectedComponents:any;
  projectId:string;
  ObjData:any=[];
 
  ngOnInit() {
    this.validateForm();
    this.projectId=this.actRoute.snapshot.paramMap.get('id');
  
    var URL="services/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.services = data;
    },error => {
      this.loader.hide();
    })
    var URL="component/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.components = data;
     this.loader.hide();
    },error => {
      this.loader.hide();
    })    
  
  
  }
 
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private commonService: ApiService,
    private loader:Ng4LoadingSpinnerService,
    private ms: MessageService
  ) { 
    this.loader.show();
    var url='project_obj/read-project_obj';
    var id = this.actRoute.snapshot.paramMap.get('id1');
    this.commonService.GetById(id,url).subscribe(data => {
      this.ObjData=data.SERVICE;
      this.projects = this.fb.group({
        COMPONENT_ID: [data.COMPONENT_ID],
        SERVICE_ID:[data.SERVICE_ID],
        SERVICE_ALIAS:[data.SERVICE_ALIAS]
       
      }) 
     
    },error => {
      this.loader.hide();
    })    
   
         
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.projects.controls[controlName].hasError(errorName);
  }  
  selectRevNo(event:any){
    console.log(event.value);
    this.projects.value.REV_NO=event.value;
  }
  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      ID: [''],
      SERVICE_ID:[''],
      COMPONENT_ID:[''],
      SERVICE_ALIAS:['']
      
    })
  }
  
  selectService(event:any){
    
    this.projects.value.SERVICE_ID=event.value;
    this.selectedService=event.value;
    console.log(this.projects.value.SERVICE_ID);
  }
  selectComponent(event:any){
    this.projects.value.COMPONENT_ID=event.value;
    this.selectedComponents=event.value;
    console.log(this.projects.value.COMPONENT_ID);

  }
  
  submitEditProjectsObjForm() {
    if (this.projects.valid) {
      this.loader.show();
      var id = this.actRoute.snapshot.paramMap.get('id1');
      var projectId=this.actRoute.snapshot.paramMap.get('id')
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_obj/edit-project_obj";
        console.log(this.projects.value);
        this.commonService.UpdateBy(projectId,id, this.projects.value,url).subscribe( res => {
          this.ms.openSnackBar("The project has been edited");
          this.ngZone.run(() => this.router.navigateByUrl('/project_obj/getAll/'+projectId))
        });
      }
    }
  }
}
