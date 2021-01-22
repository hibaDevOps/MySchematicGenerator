import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';
import {ApiService} from '../../shared/api.service';
import {AlertService} from '../../_services/alert.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {MessageService} from "../../shared/messageService";
@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.css']
})
export class InviteUsersComponent implements OnInit {

  inviteForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private ngZone: NgZone,
        private commonService: ApiService,
        private loader: Ng4LoadingSpinnerService,
        private ms: MessageService
  ) { }

  ngOnInit() {
    this.inviteForm = this.formBuilder.group({
      emailAddress: ['', Validators.required]
     
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.inviteForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.inviteForm.invalid) {
        return;
    }
  
    this.loading = true;
    this.loader.show();
    var data={
      references:{},
      email:this.f.emailAddress.value
    }
    this.commonService.InviteUsers(data)
        .pipe(first())
        .subscribe(
            data => {
                //this.router.navigate([this.returnUrl]);
                
               console.log(data);

            },
            error => {
                this.alertService.error(error);
                console.log(error);
                this.loading = false;
                this.loader.hide();
            });
}

}
