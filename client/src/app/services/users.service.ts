import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  restApi: string = 'http://localhost:3000/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getAllUsers(){
   return this.http.get(`${this.restApi}/users/all`)
  }

  createUser(user: any){
    let api_url = `${this.restApi}/users/add`;
    return this.http.post(api_url, user)
  }

  getUser(id: any){
    let api_url = `${this.restApi}/users/${id}`;
    return this.http.get(api_url);
  }

  getUserProfile(id: any){
    let api_url =`${this.restApi}/users/${id}`;
    return this.http.get(api_url,  { headers: this.httpHeaders})
    .pipe(map((res)=> { return res || {};}), catchError(this.handleError))
  }


  deleteUser(id: any){
    let api_url = `${this.restApi}/users/desactive/${id}`;
    return this.http.delete(api_url, { headers: this.httpHeaders})
    .pipe(map((res)=> { return res || {};}), catchError(this.handleError))
  }



  update(id:any, data: any){
    let api_url = `${this.restApi}/users/update/${id}`;
    return this.http.patch(api_url, data)
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
