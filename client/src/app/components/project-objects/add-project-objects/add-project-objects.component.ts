import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MessageService} from "../../../shared/messageService";
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-project-objects',
  templateUrl: './add-project-objects.component.html',
  styleUrls: ['./add-project-objects.component.css']
})
export class AddProjectObjectsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetProjectsObjForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  services:any=[];
  selectedService:any;
  components:any=[];
  selectedComponents:any;
  projectId:string;
  

  ngOnInit() {
    this.validateForm();
    
  this.projectId=this.actRoute.snapshot.paramMap.get('id');
 
  var URL="services/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.services = data;
    })
    var URL="component/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.components = data;
     
    })    
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private commonService: ApiService,
    private loader:Ng4LoadingSpinnerService,
    private ms:MessageService
  ) { 
   
 

}
  public handleError = (controlName: string, errorName: string) => {
    return this.projects.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      ID: [''],
      SERVICE_ID:[''],
      COMPONENT_ID:[''],
      SERVICE_ALIAS:['', [Validators.required]]
      
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
  submitAddProjectsObjForm(){
      this.loader.show();
      var URL="project_obj/add-project_obj";
      this.projects.value.ID=this.projectId;
      this.projects.value.SERVICE_ID=this.selectedService;
      this.projects.value.COMPONENT_ID=this.selectedComponents;
      console.log(this.projects.value);

      this.commonService.Add(this.projects.value,URL).subscribe(res => {
        this.ms.openSnackBar("The project object is added");
        this.loader.hide();
        this.ngZone.run(() => this.router.navigateByUrl('/project_obj/getAll/'+this.projectId))
      });
    }

}
