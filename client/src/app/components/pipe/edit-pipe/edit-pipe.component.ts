import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators, FormArray,FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-edit-pipe',
  templateUrl: './edit-pipe.component.html',
  styleUrls: ['./edit-pipe.component.css']
})
export class EditPipeComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  pipes: FormGroup;
  AllServices:any=[];
  SERVICE:FormArray;
  ServiceData:any=[];


  ngOnInit() {
    this.submitBookForm();
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

    var url="pipe/read-pipe";
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.commonService.GetById(id,url).subscribe(data => {
      this.ServiceData=data.SERVICES;

      this.pipes = this.fb.group({
        PIPE_NAME: [data.PIPE_NAME, [Validators.required]],
        SERVICES: this.fb.array([]),

       
      })      
      this.getArray();
      

    },error=>{
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
  getArray(){
    this.SERVICE = this.pipes.get('SERVICES') as FormArray;
    if(this.ServiceData.length > 0){
      for(let item of this.ServiceData){
      this.SERVICE.push(new FormControl(item))
      }
    }

  }
  public handleError = (controlName: string, errorName: string) => {
    return this.pipes.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  submitBookForm() {
    this.pipes= this.fb.group({
      PIPE_NAME: ['', [Validators.required]]
      
    })
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
  submitEditPipesForm() {
    this.loader.show();
    if (this.pipes.valid) {
      var id = this.actRoute.snapshot.paramMap.get('id');
      if (window.confirm('Are you sure you want to update?')) {
        console.log(this.pipes.value);
        var url = "pipe/edit-pipe";
        this.commonService.Update(id, this.pipes.value,url).subscribe( res => {
          this.ms.openSnackBar("Pipe class is edited successfully");
          this.ngZone.run(() => this.router.navigateByUrl('/pipes/getAll'))
        });
      }
    }
  }
}
