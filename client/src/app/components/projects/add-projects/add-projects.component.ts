import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";
@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetProjectsForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  process:number=0;
  contract:number=0;


  ngOnInit() {
    this.validateForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private commonService: ApiService,
    private ms:MessageService,
    private loader:Ng4LoadingSpinnerService
  ) { }
  public handleError = (controlName: string, errorName: string) => {
    return this.projects.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      PROJECT_NAME: ['', [Validators.required]],
      PROCESS_Y_N:[''],
      CONTRACTUAL_Y_N:['']
      
    })
  }
  processChange(event:any){
    console.log(event);
    if(event.checked){
    this.process=1;
    }else{
      this.process=0;
    }

  }
  contractChange(event:any){
    if(event.checked){
      this.contract=1;
      }else{
        this.contract=0;
      }
  }

  submitAddProjectsForm(){
    this.loader.show();
      var URL="project/add-project";
      console.log(this.projects.value);
      this.projects.value.PROCESS_Y_N=this.process;
      this.projects.value.CONTRACTUAL_Y_N=this.contract;
      this.commonService.Add(this.projects.value,URL).subscribe(res => {
        this.ms.openSnackBar("Project has been added");
        this.loader.hide();
        this.ngZone.run(() => this.router.navigateByUrl('/project/getAll'))
      },error=>{
        this.ms.openSnackBar("Error performing operation");
        this.loader.hide();

      });
    }
  }


