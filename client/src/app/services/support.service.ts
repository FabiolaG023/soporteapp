import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SupportService {
  restApi: string = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }

  public getAllSupports(){
    return this.http.get(`${this.restApi}/support/all`);
  }

  getOneSupport(id: any): Observable<any>{
    let api_url = `${this.restApi}/support/${id}`;
    return this.http.get(api_url)
  }

  addSupport(data: any){
    let api_url = `${this.restApi}/support/add`;
    return this.http.post(api_url, data)
  }

  updateSupport(id:any, data:any){
    let api_url = `${this.restApi}/support/update/${id}`;
    return this.http.patch(api_url, data)
  }

  desactiveSupport(id: number, isActive: boolean){
    let api_url = `${this.restApi}/support/desactive/${id}`;
    return this.http.patch(api_url, isActive)
  }

}
