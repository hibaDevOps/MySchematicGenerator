import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MessageService} from "./../../shared/messageService";
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  services: FormGroup;

  ngOnInit() {
    this.validateForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private commonService: ApiService,
    private ms: MessageService,
    private loader: Ng4LoadingSpinnerService
  ) { }
  public handleError = (controlName: string, errorName: string) => {
    return this.services.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  validateForm() {
    this.services= this.fb.group({
      SERVICE_NAME: ['', [Validators.required]]
      
    })
  }

  submitAddServicesForm() {
    this.loader.show();
    if (this.services.valid) {
      var URL='service/add-service';
      this.commonService.Add(this.services.value,URL).subscribe(res => {
        this.ms.openSnackBar("Service is added successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/services/getAll'))
      });
    }
  }
}



