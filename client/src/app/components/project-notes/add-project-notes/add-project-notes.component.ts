import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MessageService} from "../../../shared/messageService";
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';


@Component({
  selector: 'app-add-project-notes',
  templateUrl: './add-project-notes.component.html',
  styleUrls: ['./add-project-notes.component.css']
})
export class AddProjectNotesComponent implements OnInit {

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
       
       
      
  })    
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private commonService: ApiService,
    private ms: MessageService,
    private loader:Ng4LoadingSpinnerService
  ) { 
   
 

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
 
  
  submitAddProjectsNotesForm(){
    this.loader.show();
      var URL="project_notes/add-project_Notes";
      this.projects.value.ID=this.projectId;
      console.log(this.projects.value);

      this.commonService.Add(this.projects.value,URL).subscribe(res => {
        this.ms.openSnackBar("Notes are added");
        this.ngZone.run(() => this.router.navigateByUrl('/project_notes/getAll/'+this.projectId))
      });
    }

}
