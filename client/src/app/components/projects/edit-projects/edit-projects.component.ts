import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetComponentsForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  ProjectsData:any=[];
 
  ngOnInit() {
    this.submitBookForm();
    
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
    var url='project/read-project';
    var id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.loader.show();
    this.commonService.GetById(id,url).subscribe(data => {
      this.ProjectsData=data.SERVICE;
      this.projects = this.fb.group({
        PROJECT_NAME: [data.PROJECT_NAME, [Validators.required]],
        PROCESS_Y_N:[data.PROCESS_Y_N],
        CONTRACTUAL_Y_N:[data.CONTRACTUAL_Y_N]

       
      }) 
     this.loader.hide();
    },error=>{
      this.loader.hide();
    })    
   
         
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.projects.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  submitBookForm() {
    this.projects= this.fb.group({
      PROJECT_NAME: ['', [Validators.required]],
      PROCESS_Y_N:'',
      CONTRACTUAL_Y_N:''

     
      
    })
  }
  processChange(event:any){
    console.log(event);
    if(event.checked){
    this.projects.value.PROCESS_Y_N=1;
    }else{
      this.projects.value.PROCESS_Y_N=0;    }

  }
  contractChange(event:any){
    if(event.checked){
      this.projects.value.CONTRACTUAL_Y_N=1;
      }else{
        this.projects.value.CONTRACTUAL_Y_N=0;      }
  }
  
  submitEditProjectsForm() {
    this.loader.show();
    if (this.projects.valid) {
      var id = this.actRoute.snapshot.paramMap.get('id');
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project/edit-project";
        console.log(this.projects.value);
        this.commonService.Update(id, this.projects.value,url).subscribe( res => {
          this.ms.openSnackBar("The project is edited successfully");
          this.loader.hide();
          this.ngZone.run(() => this.router.navigateByUrl('/project/getAll'))
        });
      }
    }
  }
}
