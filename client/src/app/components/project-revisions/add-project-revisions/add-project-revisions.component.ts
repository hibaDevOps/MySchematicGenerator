import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";


@Component({
  selector: 'app-add-project-revisions',
  templateUrl: './add-project-revisions.component.html',
  styleUrls: ['./add-project-revisions.component.css']
})
export class AddProjectRevisionsComponent implements OnInit {

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
  projectId:string;
  projectData:any;
  projectName:any;

  numbersList=[];
  revno=[];
  alphaList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


  ngOnInit() {
    this.loader.show();

    this.validateForm();
    for (var i = 1; i <= 100; i++) {
      this.numbersList.push(i);
   }
  this.projectId=this.actRoute.snapshot.paramMap.get('id');
  var url='project/read-project';
      this.commonService.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;
        this.projectName=data.PROJECT_NAME;
        console.log(this.projectData);
        if(this.projectData.CONTRACTUAL_Y_N == 0){
                 this.revno=this.numbersList;
        }else{
          this.revno=this.alphaList;
        }
      this.loader.hide();
  })    
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private commonService: ApiService,
    private ms: MessageService,
    private loader: Ng4LoadingSpinnerService
  ) { 
   
 

}
  public handleError = (controlName: string, errorName: string) => {
    return this.projects.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      ID: [''],
      REV_NAME:[''],
      REV_NO:['']
      
    })
  }
 
  selectRevNo(event:any){
    console.log(event.value);
    this.projects.value.REV_NO=event.value;
  }
  submitAddProjectsRevForm(){
    this.loader.show();
      var URL="project_rev/add-project_rev";
      console.log(this.projects.value);
      this.projects.value.ID=this.projectId;
      this.commonService.Add(this.projects.value,URL).subscribe(res => {
        this.ms.openSnackBar("Project revision has been added");
        this.loader.hide();
        this.ngZone.run(() => this.router.navigateByUrl('/project_rev/getAll/'+this.projectId))
      });
    }
  }