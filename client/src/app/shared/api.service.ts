import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AnyARecord } from 'dns';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = '/api';
  //endpoint: string = 'https://backenap.herokuapp.com/api'; 
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  
    Add(data: any,url:any): Observable<any> {
    let API_URL = `${this.endpoint}/`+url;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  GetAll( url:any): Observable<any> {
    let API_URL = `${this.endpoint}/`+url;
    return this.http.get(`${this.endpoint}/`+url);
  }
  GetCall( url:any): Observable<any> {
    return this.http.get(url);
  }

  // Add student
  AddStudent(data: Student,url:any): Observable<any> {
    let API_URL = `${this.endpoint}/add-student`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  GetServiceBotUsers(){
    return this.http.get(`https://servicesubscription.herokuapp.com/api/v1/users`);
  }
  InviteUsers(email:any){
    let url="https://servicesubscription.herokuapp.com/api/v1/users/invite";
    return this.http.post(url, email)
    .pipe(
      catchError(this.errorMgmt)
    )
  }
  
    StripeRegisterUser(data: any,url:any): Observable<any> {
      return this.http.post(url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
    }
  
  // Get all students
  GetStudents() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get student
  GetById(id:any,url:any): Observable<any> {
    let API_URL = `${this.endpoint}/`+url+`/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {

          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Update student
  Update(id, data, url): Observable<any> {
    let API_URL = `${this.endpoint}/`+url+`/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  UpdateBy(id,id1, data, url): Observable<any> {
    let API_URL = `${this.endpoint}/`+url+`/${id}/${id1}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete student
  Delete(id,url): Observable<any> {
    var API_URL = `${this.endpoint}/`+url+`/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  promisify(url, id) { 
    let API_URL = `${this.endpoint}/`+url+`/${id}`;
        return this.http.get(API_URL,  { headers: this.headers }).toPromise();
   }

   promisifyPost(url, id, data) { 
    let API_URL = `${this.endpoint}/`+url+`/${id}`;
        return this.http.post(API_URL, data, { headers: this.headers }).toPromise();
   }


  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}