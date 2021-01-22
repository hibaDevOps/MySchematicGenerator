import { Component, ViewChild, HostListener, OnInit,NgZone } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { CreatesubscriptionComponent } from './components/billing/createsubscription/createsubscription.component';
import { AuthenticationService } from './_services/authentication.service';
import { User } from '../app/models/User';
import {ApiService} from './shared/api.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened = true;
  step = 0;
  isLogged:boolean;
  currentUser: User;
  isAdmin:boolean;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  constructor(private router: Router, public dialog: MatDialog, public auth:AuthenticationService , public ngZone:NgZone, public apiService:ApiService) {
    
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
    
    this.apiService.GetServiceBotUsers().pipe(first()).subscribe(
        data => {
          console.log(data);
        },error =>{

        });
    this.currentUser = this.auth.currentUserValue;
    if(this.currentUser){
      if(this.currentUser.isAdmin == "1"){
        this.isAdmin=true;
      }else{
        this.isAdmin=false;
      }
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
    
    console.log(window.innerWidth)
    if(this.isLogged){
    if (window.innerWidth < 768 ) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }
   // this.openDialog();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }
  stopToggle(event:any){
    console.log(event);
  }
  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
  navigate(pagename:any){
    if(pagename == "service-size"){
      this.router.navigate(['/get-all-services-size'] );
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  logout(){
    this.auth.logout();
    this.isLogged=false;
    this.router.navigate(['/login'] );

  }
  login(){
    this.router.navigate(['/login'] );
  }
}
