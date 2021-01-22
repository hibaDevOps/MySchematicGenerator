import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";


@Component({
  selector: 'app-edit-project-notes',
  templateUrl: './edit-project-notes.component.html',
  styleUrls: ['./edit-project-notes.component.css']
})
export class EditProjectNotesComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetProjectsNotesForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  services:any=[];
  selectedService:any;
  components:any=[];
  selectedComponents:any;
  projectId:string;
  projectData:any=[];
  section:any=[];
  
  ngOnInit() {
    this.validateForm();
    
  this.projectId=this.actRoute.snapshot.paramMap.get('id');
 
  var url='project/read-project';
      this.commonService.GetById(this.projectId,url).subscribe(data => {
        this.projectData=data;
        if(this.projectData.PROCESS_Y_N == 1){
          this.section.push("General");
          this.section.push("Mechanical");
          this.section.push("Process");
          this.section.push("Electrical");
          this.section.push("Communications");
        }
        else{
          this.section.push("General");
          this.section.push("Mechanical");
          this.section.push("Electrical");
          this.section.push("Communications");
        }
       
       
      
  },error=>{
    this.loader.hide();
  })    
  var url='project_notes/read-project_notes';
    var id = this.actRoute.snapshot.paramMap.get('id1');
    this.commonService.GetById(id,url).subscribe(data => {
      this.projects = this.fb.group({
        NOTE_TEXT: [data.NOTE_TEXT],
        NOTE_CATEGORY:[data.NOTE_CATEGORY]
       
      }) 
     this.loader.hide();
    },error=>{
      this.loader.hide();
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
 

}
  public handleError = (controlName: string, errorName: string) => {
    return this.projects.controls[controlName].hasError(errorName);
  }  
 
  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      ID: [''],
      NOTE_TEXT:[''],
      NOTE_CATEGORY:['',Validators.required]
      
      
    })
  }
 
  
  submitEditProjectsNotesForm() {
    if (this.projects.valid) {
      this.loader.show();
      var id = this.actRoute.snapshot.paramMap.get('id1');
      var projectId=this.actRoute.snapshot.paramMap.get('id')
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_notes/edit-project_notes";
        console.log(this.projects.value);
        this.commonService.UpdateBy(projectId,id, this.projects.value,url).subscribe( res => {
          this.loader.hide();
          this.ms.openSnackBar("Notes are edited");
          this.ngZone.run(() => this.router.navigateByUrl('/project_notes/getAll/'+projectId))
        });
      }
    }
  }

}
