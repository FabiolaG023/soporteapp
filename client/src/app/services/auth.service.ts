import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import decode from 'jwt-decode';

import { User } from "./datos";

import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 restApi: string = 'http://localhost:3000/api';
 //roleAs: string ;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private readonly http: HttpClient,
     private jwtHelper: JwtHelperService,
      public router: Router)
  { }


  // almacena el usuario en la BD
  signUp(user: User): Observable<any> {
    let api = `${this.restApi}/users`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
// loguea al usuario, funciona
signIn(user: User): Observable<any> {
  return this.http.post<any>(`${this.restApi}/auth/login`, user).pipe(catchError(this.handleError));
  }

/*   check(){
    let api = `${this.restApi}/auth/check-status`;
    return this.http.get(api).pipe(catchError(this.handleError));
  } */

    //funciona
  getToken() {
    return localStorage.getItem('access_token');
  }

//funciona
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }}



  getUserProfile(id: any): Observable<any> {
   let api = `${this.restApi}/users/${id}`;
    return this.http.get<any>(api, { headers: this.httpHeaders}).pipe(
      map((res) => {return res || {};}),
      catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }



}
