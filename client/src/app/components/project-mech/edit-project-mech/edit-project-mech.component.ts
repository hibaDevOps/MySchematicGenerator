import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";


@Component({
  selector: 'app-edit-project-mech',
  templateUrl: './edit-project-mech.component.html',
  styleUrls: ['./edit-project-mech.component.css']
})
export class EditProjectMechComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetProjectsSheetForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projects: FormGroup;
  services:any=[];
  services_size:any=[];
  pipe_class:any=[];
  selectedService:any;
  components:any=[];
  selectedComponents:any;
  projectId:string;
  projectData:any=[];
  section:any=[];
  item_no:any=[];
  rev_issued:any=[];
  numbersList=[];
  level=[0,1,2,3];
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
       
      
  },error=>{
    this.loader.hide();
  })    
  var URL="services/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.services = data;
    },error=>{
      this.loader.hide();
    }) 
    var URL="component/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.components = data;
     
    },error=>{
      this.loader.hide();
    })    
    var URL="get-all-services-size";
    this.commonService.GetAll(URL).subscribe(data => {
      this.services_size = data;
    },error=>{
      this.loader.hide();
    }) 
    
    var URL="pipes/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.pipe_class = data;
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
    private loader : Ng4LoadingSpinnerService,
  private ms: MessageService
  ) { 
    this.loader.show();
    var url='project_mech/read-project_mech';
    var id = this.actRoute.snapshot.paramMap.get('id1');
    this.commonService.GetById(id,url).subscribe(data => {
      this.projects = this.fb.group({
        ID:[''],
        COMPONENT_ID:[data.COMPONENT_ID],
        REF_NO:[data.REF_NO],
        LEVEL:[data.LEVEL],
        SERVICE_DESCRIPTION:[data.SERVICE_DESCRIPTION],
        SERVICE_SIZE:[data.SERVICE_SIZE],
       
        PIPE_CLASS:[data.PIPE_CLASS],
        
        CONNECTION_TYPE_SIZE:[data.CONNECTION_TYPE_SIZE],
       
        UM_TEMP_MIN:[data.UM_TEMP_MIN],
        
        UM_TEMP_MAX:[data.UM_TEMP_MAX],
        
        UM_TEMP_UNIT:[data.UM_TEMP_UNIT],
        
        UM_PRES_MIN:[data.UM_PRES_MIN],
      
      UM_PRES_MAX:[data.UM_PRES_MAX],
      
      UM_PRES_UNIT:[data.UM_PRES_UNIT],
      
      UM_FLOW_MIN:[data.UM_FLOW_MIN],
      
      UM_FLOW_MAX:[data.UM_FLOW_MAX],
      
      UM_FLOW_UNIT:[data.UM_FLOW_UNIT],
      
      SERVICE_CONN:[data.SERVICE_CONN],
      
      END_REF_NO:[data.END_REF_NO],
      
      OPE:[data.OPE],
      
      NOTES:[data.NOTES]
       
      }) 
     
    },error=>{
      this.loader.hide();
    })     
 

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

  retreiveService(id:any){
    for(let ser of this.services){
      console.log(ser.SERVICE_NAME);
      if(ser._id == id){
        return ser.SERVICE_NAME;
      }
    }
    return '';

  }
  retreiveComponent(id:any){
    for(let ser of this.components){
      if(ser._id == id){
        return ser.COMPONENT_NAME;
      }
    }
    return '';
  }
  retreivePipe(id:any){
    for(let ser of this.pipe_class){
      
      if(ser._id == id){
        return ser.PIPE_NAME;
      }
    }
    return '';

  }
  
  

  /* Reactive book form */
  validateForm() {
    this.projects= this.fb.group({
      ID:[''],
      COMPONENT_ID:[''],
      REF_NO:[''],
      LEVEL:[''],
      SERVICE_DESCRIPTION:[''],
      SERVICE_SIZE:[''],
     
      PIPE_CLASS:[''],
      
      CONNECTION_TYPE_SIZE:[''],
     
      UM_TEMP_MIN:[''],
      
      UM_TEMP_MAX:[''],
      
      UM_TEMP_UNIT:[''],
      
      UM_PRES_MIN:[''],
    
    UM_PRES_MAX:[''],
    
    UM_PRES_UNIT:[''],
    
    UM_FLOW_MIN:[''],
    
    UM_FLOW_MAX:[''],
    
    UM_FLOW_UNIT:[''],
    
    SERVICE_CONN:[''],
    
    END_REF_NO:[''],
    
    OPE:[''],
    
    NOTES:['']
      
      
    })
  }
 
  
  submitEditProjectsMechForm() {
    if (this.projects.valid) {
      this.loader.show();
      var id = this.actRoute.snapshot.paramMap.get('id1');
      var projectId=this.actRoute.snapshot.paramMap.get('id')
      this.projects.value.ID=projectId;
      if (window.confirm('Are you sure you want to update?')) {
        var url = "project_mech/edit-project_mech";
        console.log(this.projects.value);
        this.commonService.UpdateBy(projectId,id, this.projects.value,url).subscribe( res => {
          this.loader.hide();
          this.ms.openSnackBar("The Mechanical Schedule is edited");
          this.ngZone.run(() => this.router.navigateByUrl('/project_mech/getAll/'+projectId))
        });
      }
    }
  }




}
