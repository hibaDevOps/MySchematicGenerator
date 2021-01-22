import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../../shared/messageService";

@Component({
  selector: 'app-add-services-component',
  templateUrl: './add-services-component.component.html',
  styleUrls: ['./add-services-component.component.css']
})
export class AddServicesComponentComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetComponentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  components: FormGroup;

  ngOnInit() {
    this.validateForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private commonService: ApiService,
    private loader: Ng4LoadingSpinnerService,
    private ms: MessageService
  ) { }
  public handleError = (controlName: string, errorName: string) => {
    return this.components.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  validateForm() {
    this.components= this.fb.group({
      COMPONENT_NAME: ['', [Validators.required]]
      
    })
  }

  submitAddComponentsForm(){
      this.loader.show();
      var URL="component/add-component";
      this.commonService.Add(this.components.value,URL).subscribe(res => {
        this.ms.openSnackBar("Component is added successfully");
        this.loader.hide();
        this.ngZone.run(() => this.router.navigateByUrl('/component/getAll'))
      },error=>{
        this.loader.hide();
      });
    }
  }

