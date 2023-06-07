import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecordService {
  restApi: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getAllRecord(){
    let api_url = `${this.restApi}/record/all`;
    return this.http.get(api_url)
  }

  addRecord(record: any){
    let api_url = `${this.restApi}/record/add`;
    return this.http.post(api_url, record)
  }




}

