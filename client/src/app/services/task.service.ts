import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  restApi: string = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }


 public getTaksAll(){
  return this.http.get(`${this.restApi}/task/all`);
  }

 public getStatusTask(){
  return this.http.get(`${this.restApi}/task/taskStatus`);
  }


  getTask(taskId: any): Observable<any>{
    let api_url = `${this.restApi}/task/${taskId}`;
    return this.http.get(api_url)
  }


  addTask(task: any){
    let api_url = `${this.restApi}/task/add`;
    return this.http.post(api_url, task)
  }


  update(id:any, task: any){
    let api_url = `${this.restApi}/task/update/${id}`;
    return this.http.patch(api_url, task)
  }

  updateStatus(id:any, status: any){
    let api_url = `${this.restApi}/task/updateStatus/${id}`;
    return this.http.patch(api_url, status)
  }

  desactiveTask(id: any, isActive: boolean){
    let api_url = `${this.restApi}/task/desactive/${id}`;
    return this.http.patch(api_url, isActive)
  }



}
