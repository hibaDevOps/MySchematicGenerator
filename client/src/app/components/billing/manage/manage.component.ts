import { ApiService } from '../../../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from "../../../shared/messageService";
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Renderer2,Component, OnInit, ViewChild, NgZone, ElementRef, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import{environment} from '../../../../environments/environment';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  token:string
  constructor( private commonSevice: ApiService, private _renderer2: Renderer2, 
               @Inject(DOCUMENT) private _document: Document,private dialog: MatDialog) { 
      this.loadScripts();

    }

  ngOnInit() {
    if(localStorage.getItem('registerUser')!=null && localStorage.getItem('registerUser') != undefined){
      console.log(localStorage.getItem('registerUser'));

    

    var URL = "billing/getToken";
    var email=localStorage.getItem('registerUser');
    this.commonSevice.Add({email},URL).subscribe(data => {
      this.token=data.toString();
      console.log(this.token);
      let script = this._renderer2.createElement('script');
 
      script.type = `text/javascript`;
      script.text = `
      Servicebot.init({
        url : `+`"`+environment.APIEndpoint+`"`+`,
        selector : document.getElementById('servicebot-management-form'),
        type : "manage",
        token: `+`"`+this.token+`"`+`,
        handleResponse: (response) => {
		console.log(response);
            //determine what to do on certain events...
        }
    })
 
        `;

      this._renderer2.appendChild(this._document.body, script);

    });
  }
    
  }

  close(){
    this.dialog.closeAll();
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
