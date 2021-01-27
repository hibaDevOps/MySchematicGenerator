import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api.service';
import { MessageService } from 'src/app/shared/messageService';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  uid:any;
  token:any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private ngZone: NgZone,
    private commonService: ApiService,
    private loader: Ng4LoadingSpinnerService,
    private ms: MessageService) { }

  ngOnInit() {  
    
    this.uid=this.route.snapshot.paramMap.get('uid');
    this.token=this.route.snapshot.paramMap.get('token');
    this.commonService.ResetPasswordForm(this.uid,this.token)
    .pipe(first())
    .subscribe(
        data => {
          console.log(data);

        },error=>{
           console.log(error);
        })


    
    this.loginForm = this.formBuilder.group({
    newPassword:['', Validators.required]
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
      
      var newPassword=this.f.newPassword.value;
      this.uid=this.route.snapshot.paramMap.get('uid');
      this.token=this.route.snapshot.paramMap.get('token');


      this.commonService.SendNewPassword(this.uid,this.token,{password:newPassword})
          .pipe(first())
          .subscribe(
              data => {
                      console.log(data);
                      this.loader.hide();
                      this.loading = false;
                      localStorage.removeItem("resetPasswordUser");
                      this.ms.openSnackBar("Password has been successfully changed");
                      this.ngZone.run(() => this.router.navigateByUrl('/login'))



                  

              },
              error => {
                this.ms.openSnackBar("Error! please try again later");

                  this.alertService.error(error);
                  this.loading = false;
                  console.log(error);
                  this.loader.hide();
              });



}
}
