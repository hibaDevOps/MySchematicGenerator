import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MessageService} from "../../../shared/messageService";
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';
@Component({
  selector: 'app-add-project-mech',
  templateUrl: './add-project-mech.component.html',
  styleUrls: ['./add-project-mech.component.css']
})
export class AddProjectMechComponent implements OnInit {

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
       
      
  })    
  var URL="services/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.services = data;
    })
    var URL="component/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.components = data;
     
    })   
    var URL="get-all-services-size";
    this.commonService.GetAll(URL).subscribe(data => {
      this.services_size = data;
    })
    
    var URL="pipes/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.pipe_class = data;
     
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
 
  
  submitAddProjectsMechForm(){
    this.loader.show();
      var URL="project_mech/add-project_mech";
      this.projects.value.ID=this.projectId;
      console.log(this.projects.value);

      this.commonService.Add(this.projects.value,URL).subscribe(res => {
        this.ms.openSnackBar("The Mechanical project is added");
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
      }
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/project_mech/getAll/'+this.projectId] );
      });
    }



}
