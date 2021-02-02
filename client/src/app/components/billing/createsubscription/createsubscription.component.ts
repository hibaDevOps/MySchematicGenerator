import { ApiService } from '../../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from "../../../shared/messageService";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Renderer2,Component, OnInit, ViewChild, NgZone, ElementRef, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { ManageComponent } from '../manage/manage.component';
import { AuthenticationService } from '../../../_services/authentication.service';
import { User } from '../../../models/User';
import {environment} from '../../../../environments/environment';
declare var $: any;



@Component({
  selector: 'app-createsubscription',
  templateUrl: './createsubscription.component.html',
  styleUrls: ['./createsubscription.component.css']
})
export class CreatesubscriptionComponent implements OnInit {
  currentUser:User;
  emailUser:string;
  existCondition:any;
  isvisible:boolean;

  /*serviceBotParams = {
    servicebot_id: 'E0OQN0P0Dort',  // LIVE & TEST MODE IDs ARE DIFFERENT
    service: 'Flat Subscription',
    email: 'hibaDevOps@gmail.com',
    handleResponse: async (payload) => {
      if (payload.event === 'create_subscription') {
        console.log('Response Object ', payload.response);
      }
    }
  };*/
  constructor(private commonSevice: ApiService, private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,private dialog: MatDialog,private router: Router,private auth:AuthenticationService,private ms:MessageService,    private loader: Ng4LoadingSpinnerService,
    ) { 
      
      this.loadScripts();
    }

  ngOnInit() {

    
    this.isvisible=false;
    var user=localStorage.getItem('UserRegister');
    var apiUrl=environment.APIEndpoint;
    this.currentUser=JSON.parse(user);
    console.log(this.currentUser);
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    Servicebot.init({
      templateId : 1,
      url : "${apiUrl}",
      selector : document.getElementById('servicebot-request-form'),
      handleResponse : (response) => {
       if(response!=undefined){
        function makeRequest (method, url, data) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onload = function () {
              if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
              } else {
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              }
            };
            xhr.onerror = function () {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            };
            if(method=="POST" && data){
                xhr.send(JSON.stringify(data));
            }else{
                xhr.send();
            }
          });
        }

        var data=this.currentUser;
        data=JSON.parse(localStorage.getItem('UserRegister'));
        var envAPI="${apiUrl}";
        console.log(data);
        makeRequest('POST', envAPI+"/api/v1/users/application/register",data).then(function(data){
                      var results=JSON.parse(data);
                      alert("You have been successfully registered");
                     
        });
       }
      },
      type: "request",
      spk: "pk_test_51Hk5E2HRkt4pM4voJCzKPxwsFx4KQamuuLw5ouoI1POpvbSIhpoqRsgeDQMLZQwHGWCQsVeAqBxo3GddsskeK1WB00Aav17VXZ",
      forceCard : false, //set to true if you want credit card to be a required field for the customer
      setPassword : false //set to true if you want customer to fill out a password
  })  
  
  `;
  console.log(script.text);
  this._renderer2.appendChild(this._document.body, script);
  this.existCondition = setInterval(function() {
    if ($('#servicebot-request-form').html()!='') {
       if($('#servicebot-request-form .App span').html()!=''){
        $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('focus');
        $( "input[type=text]" ).focus(function() {
          $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('focus');
        });
        $("form").submit(function( event ) {
/*
          if(!$('input[type=text]').val() || $('input[type=text]').val()=='' || $('input[type=text]').val()==undefined){
            $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('blur');

          }
           if($('input[type=text]').attr('value')=='' || $('input[type=text]').attr('value')==undefined)
           {
            $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('blur');
            
           }
           $("input[type=text]").attr("value", (localStorage.getItem('registerUser')));
           $('input[type=text]').val((localStorage.getItem('registerUser'))).trigger('focus');
*/
           
          });

       }
      
    }
   }, 100); 
  }
  close(){
    this.dialog.closeAll();
  }
  
  isLogged(){
    if (this.auth.currentUserValue) { 
      console.log(this.isvisible);
      return true;
    }
    else{
      console.log(this.isvisible);
      return false;
    }
  }

  manage(){
    const dialogRef = this.dialog.open(ManageComponent,{
      height: '600px',
      width: '700px'
    });
  
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  gotoManage(){
  this.router.navigate(['/billing/manage']);
  }
  ngOnDestroy(){
    clearInterval(this.existCondition);

  }
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        'https://js.stripe.com/v3/',
        'https://servicebot.io/js/servicebot-embed.js'

       //Load all your script files here'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    }
    
   } 

   

}
