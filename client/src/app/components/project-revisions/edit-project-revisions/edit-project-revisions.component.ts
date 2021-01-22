import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";




@Component({
  selector: 'app-edit-project-revisions',
  templateUrl: './edit-project-revisions.component.html',
  styleUrls: ['./edit-project-revisions.component.css']
})
export class EditProjectRevisionsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetComponentsForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  ProjectsData:any=[];
  numbersList=[];
  revno=[];
  projectData:any;
  projectId:any;
  alphaList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

 
  ngOnInit() {
    this.submitBookForm();
    for (var i = 1; i <= 100; i++) {
      this.numbersList.push(i);
   }
  this.projectId=this.actRoute.snapshot.paramMap.get('id');
  var url='project/read-project';
      this.commonService.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;
        console.log(this.projectData);
        if(this.projectData.CONTRACTUAL_Y_N == 0){
                 this.revno=this.numbersList;
        }else{
          this.revno=this.alphaList;
        }
      
  })    
  }
 
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private commonService: ApiService,
    private loader: Ng4LoadingSpinnerService,
    private ms: MessageService
  ) { 
    this.loader.show();
    var url='project_rev/read-project_rev';
    var id = this.actRoute.snapshot.paramMap.get('id1');
    this.commonService.GetById(id,url).subscribe(data => {
      this.ProjectsData=data.SERVICE;
      this.projects = this.fb.group({
        REV_NAME: [data.REV_NAME, [Validators.required]],
        REV_NO:[data.REV_NO]
       
      }) 
     this.loader.hide();
    },error=>{
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
  submitBookForm() {
    this.projects= this.fb.group({
      REV_NAME: ['', [Validators.required]],
      REV_NO:['']

     
      
    })
  }
  
  submitEditProjectsRevForm() {
    
    if (this.projects.valid) {
      this.loader.show();
      var id = this.actRoute.snapshot.paramMap.get('id1');
      var projectId=this.actRoute.snapshot.paramMap.get('id')
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_rev/edit-project_rev";
        console.log(this.projects.value);
        this.commonService.UpdateBy(projectId,id, this.projects.value,url).subscribe( res => {
          this.ms.openSnackBar("The project is edited");
          this.loader.hide();
          this.ngZone.run(() => this.router.navigateByUrl('/project_rev/getAll/'+projectId))
        });
      }
    }
  }

}
