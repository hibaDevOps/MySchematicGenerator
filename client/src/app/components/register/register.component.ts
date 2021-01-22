import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';
import {ApiService} from '../../shared/api.service';
import {AlertService} from '../../_services/alert.service';
import {MatDialog} from '@angular/material/dialog';
import { MessageService } from "../../shared/messageService";
import { CreatesubscriptionComponent } from './../billing/createsubscription/createsubscription.component';




@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: ApiService,
        private alertService: AlertService,
        private dialog:MatDialog,
        private ms:MessageService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(CreatesubscriptionComponent,{
          height: '600px',
          width: '700px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
    ngOnInit() {
        
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            phone: ['', Validators.required],
            name: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.ms.openSnackBar("Please fill all required fields");
            return;
        }

        this.loading = true;
       localStorage.setItem("UserRegister",JSON.stringify(this.registerForm.value));
       localStorage.setItem('registerUser', this.registerForm.value.email);
       this.router.navigate(['/billing/create-subscription']);


        //return;
    /*    var url='auth/register';
        this.userService.Add(this.registerForm.value,url)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(this.registerForm.value.emailAddress);
                    console.log(localStorage.getItem('registerUser'));
                    this.alertService.success('Registration successful', true);
                     this.router.navigate(['/billing/create-subscription']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}
