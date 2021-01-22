import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, FormArray,FormControl, Validators } from "@angular/forms";
import {MessageService} from "./../../shared/messageService";
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  services: FormGroup;
  ServiceData=[];
  PipeData:any=[];
  PIPE:FormArray;

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
    var url="service/read-service";
    this.loader.show();
    var id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    
    this.commonService.GetById(id,url).subscribe(data => {
      this.ServiceData=data.PIPE;
      console.log(data.PIPE);
      this.services = this.fb.group({
        SERVICE_NAME: [data.SERVICE_NAME, [Validators.required]],
        PIPE: this.fb.array([]),

       
      },error=>{
        this.loader.hide();
      }) 
      this.getArray();
     
    })    
    var URL="pipes/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.PipeData = data;
      this.loader.hide();
    }, error =>{
      this.loader.hide();
    })     
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.services.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  submitBookForm() {
    this.services= this.fb.group({
      SERVICE_NAME: ['', [Validators.required]],
      PIPE: new FormArray([]),

     
      
    })
  }
  getArray(){
    this.PIPE = this.services.get('PIPE') as FormArray;
    if(this.ServiceData.length > 0){
      for(let item of this.ServiceData){
      this.PIPE.push(new FormControl(item))
      }
    }

  }
  onCheckboxChange(e) {
    
  
    if (e.target.checked) {
      this.PIPE.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.PIPE.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          this.PIPE.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
 /* onChange(checkbox:any){
    var formArray: FormArray = this.services.get('PIPE') as FormArray;
    console.log(checkbox);  

     if(checkbox.checked){
       console.log(checkbox.value);
      formArray.push(new FormControl(checkbox.value));

     }else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == checkbox.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }*/
  submitEditServicesForm() {
    this.loader.show();
    if (this.services.valid) {
      var id = this.actRoute.snapshot.paramMap.get('id');
      if (window.confirm('Are you sure you want to update?')) {
        var url = "service/edit-service";
        console.log(this.services.value);
        this.commonService.Update(id, this.services.value,url).subscribe( res => {
          this.ms.openSnackBar("Service is edited successfully");
          this.ngZone.run(() => this.router.navigateByUrl('/services/getAll'))
          
        });
      }
    }
  }
}
