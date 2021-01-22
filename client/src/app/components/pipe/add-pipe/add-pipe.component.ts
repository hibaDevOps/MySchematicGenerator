import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {MessageService} from "../../../shared/messageService";
import { Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent } from 'ng4-loading-spinner';
@Component({
  selector: 'app-add-pipe',
  templateUrl: './add-pipe.component.html',
  styleUrls: ['./add-pipe.component.css']
})
export class AddPipeComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  pipes: FormGroup;

  ngOnInit() {
    this.validateForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private commonService: ApiService,
    private loader: Ng4LoadingSpinnerService,
    private ms:MessageService
  ) { }
  public handleError = (controlName: string, errorName: string) => {
    return this.pipes.controls[controlName].hasError(errorName);
  }  
  /* Reactive book form */
  validateForm() {
    this.pipes= this.fb.group({
      PIPE_NAME: ['', [Validators.required]]
      
    })
  }

  submitAddPipesForm() {
    this.loader.show();
    if (this.pipes.valid) {
      var URL='pipe/add-pipe';
      this.commonService.Add(this.pipes.value,URL).subscribe(res => {
        this.ms.openSnackBar("Pipe Class is added successfully");
        this.ngZone.run(() => this.router.navigateByUrl('/pipes/getAll'))
      });
    }
  }
}