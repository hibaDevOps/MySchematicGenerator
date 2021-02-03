import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public isLogged:boolean;
    private subject = new Subject();
    user:User;
    private observable = this.subject.asObservable();
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    auth(email: string, password: string){
        
        return this.http.post<any>(environment.APIEndpoint+`/api/v1/auth/session`, { email,password})
            
            
    }
    login(username: string, password: string) {
        return this.http.post<any>(`/api/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
               
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    this.isLogged=true;
                }
                else{
                    this.isLogged=false;
                }

                return user;
            }));
    }
    public isLoggedIn(): boolean {
        return this.isLogged;
    }

    public isLoggedInObservable(): Observable<User> {
        return this.currentUser;
    }
    public setUser(user:User){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.isLogged=true;
    }
    public getToken(){
        return !!localStorage.getItem("currentUser"); 
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        
       // window.location.reload();
    }
}