import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api.service';
import { MessageService } from 'src/app/shared/messageService';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
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
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }
  onSubmit(){

    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.loader.show();
        var email=this.f.emailAddress.value;
        var url='email/send-password';
        this.commonService.Add({email}, url)
            .pipe(first())
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                        console.log(data);
                        this.loader.hide();
                        this.loading = false;
                        this.ms.openSnackBar("Password has been sent to your email address");

                    

                },
                error => {
                  this.ms.openSnackBar("You are not a registered user");

                    this.alertService.error(error);
                    this.loading = false;
                    console.log(error);
                    this.loader.hide();
                });



  }
}
