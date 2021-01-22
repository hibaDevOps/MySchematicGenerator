import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from '../../shared/messageService';


@Component({
  selector: 'app-edit-services-value',
  templateUrl: './edit-services-value.component.html',
  styleUrls: ['./edit-services-value.component.css']
})
export class EditServicesValueComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  servicesSize: FormGroup;

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
    var url="read-services-value";
    var id = this.actRoute.snapshot.paramMap.get('id');
    loader.show();
    console.log(id);
    this.commonService.GetById(id,'read-services-value').subscribe(data => {
      this.servicesSize = this.fb.group({
        SIZE_VALUE: [data.SIZE_VALUE, [Validators.required]]
       
      })  
      this.loader.hide();    
    },error=>{
      this.loader.hide();
    })    

  }
  public handleError = (controlName: string, errorName: string) => {
    return this.servicesSize.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  submitBookForm() {
    this.servicesSize= this.fb.group({
      SIZE_VALUE: ['', [Validators.required]]
      
    })
  }

  submitServicesForm() {
    this.loader.show();
    if (this.servicesSize.valid) {
      console.log(this.servicesSize.value)
      var id = this.actRoute.snapshot.paramMap.get('id');
      if (window.confirm('Are you sure you want to update?')) {
        var url = "edit-services-value";
        this.commonService.Update(id, this.servicesSize.value,url).subscribe( res => {
        this.ms.openSnackBar("Service Size is edited successfully");
          this.ngZone.run(() => this.router.navigateByUrl('/get-all-services-size'))
        });
      }
    }
  }

}
