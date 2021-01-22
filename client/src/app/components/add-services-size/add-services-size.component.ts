import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone,NgModule } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MessageService} from '../../shared/messageService';
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';



@Component({
  selector: 'app-add-services-size',
  templateUrl: './add-services-size.component.html',
  styleUrls: ['./add-services-size.component.css']
})

export class AddServicesSizeComponent implements OnInit {
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
    private commonService: ApiService ,
    private ms: MessageService,
    private loader: Ng4LoadingSpinnerService ) { }
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
      var URL='add-services_size';
      this.commonService.Add(this.servicesSize.value,URL).subscribe(res => {
        this.ms.openSnackBar("Service size added successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/get-all-services-size'))
      });
    }
  }
}
