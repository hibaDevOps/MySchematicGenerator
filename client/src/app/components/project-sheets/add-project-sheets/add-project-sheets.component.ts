import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-add-project-sheets',
  templateUrl: './add-project-sheets.component.html',
  styleUrls: ['./add-project-sheets.component.css']
})
export class AddProjectSheetsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetProjectsSheetForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  services:any=[];
  selectedService:any;
  components:any=[];
  selectedComponents:any;
  projectId:string;
  projectData:any=[];
  section:any=[];
  item_no:any=[];
  rev_issued:any=[];
  numbersList=[];
  alphaList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  ngOnInit() {
    this.validateForm();
    for(var i=1; i<=10;i++){
      this.numbersList.push(i);
    }
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
        if(this.projectData.CONTRACTUAL_Y_N == 1){
           this.rev_issued=this.numbersList;
        }else{
          this.rev_issued=this.alphaList;
        }
        this.item_no=["00","01","02"];
        console.log(this.projectData);
       
      
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
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.projects.get('DATE_ISSUED').setValue(convertDate, {
      onlyself: true
    })
  }  

  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      ID: [''],
      ITEM_NAME:[''],
      DESCRIPTION_A:[''],
      DESCRIPTION_B:[''],
      DESCRIPTION_C:[''],
      SECTION:[''],
      ITEM_NO:[''],
      DATE_ISSUED:[''],
      REV_ISSUED:['']
      
      
    })
  }
 
  
  submitAddProjectsSheetForm(){
    this.loader.show();
      var URL="project_sheet/add-project_sheet";
      this.projects.value.ID=this.projectId;
      console.log(this.projects.value);

      this.commonService.Add(this.projects.value,URL).subscribe(res => {
        this.ms.openSnackBar("The register sheet is added");
        this.ngZone.run(() => this.router.navigateByUrl('/project_sheet/getAll/'+this.projectId))
      });
    }


}
