import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-edit-services-component',
  templateUrl: './edit-services-component.component.html',
  styleUrls: ['./edit-services-component.component.css']
})
export class EditServicesComponentComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetComponentsForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  components: FormGroup;
  ServiceData:any=[];
  AllServices:any=[];
  SERVICE:FormArray;
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
    var url='component/read-component';
    this.loader.show();
    var id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.commonService.GetById(id,url).subscribe(data => {
      this.ServiceData=data.SERVICE;
      console.log(data.SERVICE);
      this.components = this.fb.group({
        COMPONENT_NAME: [data.COMPONENT_NAME, [Validators.required]],
        SERVICE: this.fb.array([]),

       
      }) 
      this.getArray();
     
    },error => {
      this.loader.hide();
    })    
    var URL="services/getAll";
    this.commonService.GetAll(URL).subscribe(data => {
      this.AllServices = data;
      this.loader.hide();
    },error=>{
      this.loader.hide();
    })     
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.components.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  submitBookForm() {
    this.components= this.fb.group({
      COMPONENT_NAME: ['', [Validators.required]],
      SERVICE: new FormArray([]),

     
      
    })
  }
  getArray(){
    this.SERVICE = this.components.get('SERVICE') as FormArray;
    if(this.ServiceData.length > 0){
      for(let item of this.ServiceData){
      this.SERVICE.push(new FormControl(item))
      }
    }

  }
  onCheckboxChange(e) {
    
  
    if (e.target.checked) {
      this.SERVICE.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.SERVICE.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          this.SERVICE.removeAt(i);
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
  submitEditComponentsForm() {
    this.loader.show();
    if (this.components.valid) {
      var id = this.actRoute.snapshot.paramMap.get('id');
      if (window.confirm('Are you sure you want to update?')) {
        var url = "component/edit-component";
        console.log(this.components.value);
        this.commonService.Update(id, this.components.value,url).subscribe( res => {
          this.ms.openSnackBar("Component is edited successfully");
          this.loader.hide();
          this.ngZone.run(() => this.router.navigateByUrl('/component/getAll'))
        });
      }
    }
  }

}
