import { Component } from '@angular/core';
import { element } from 'protractor';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

ListTasks: any = [];
Status: any = [];
total: any ;
realizado: any;
pendiente: any ;
cancelado: any ;

constructor(private taskService: TaskService ){}

ngOnInit(){
 this.taskService.getTaksAll().subscribe((res) =>{this.ListTasks = res;
  this.total =this.ListTasks.length;
})

this.taskService.getStatusTask().subscribe((res)=>{this.Status = res, console.log(this.Status )
  ,this.realizado = this.Status[0].length,
  this.pendiente = this.Status[1].length,
  this.cancelado = this.Status[2].length})
}

}




