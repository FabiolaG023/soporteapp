import { Component, OnInit, Optional } from '@angular/core';
import { TaskService} from 'src/app/services/task.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupportService } from 'src/app/services/support.service';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';
import decode from 'jwt-decode';
import { RecordService } from 'src/app/services/record.service';


@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.scss']
})
export class TaksComponent {

ListTasks: any ;
task: any =[];
taskStatus: any =[];
userId: number = 0;
isActiveTask: any;
desactive: boolean = false;


listStatus: any = ['REALIZADO','CANCELADO'];
listType: any = ['AVERIA','MANTENIMIENTO', 'SOLICITUD']; //MANTENIMIENTO
listRequest: any = ['SOFTWARE','HARDWARE','RED']
Listsupport: any =[];

resRescord: any =[];

Record: any ={};
token: any = {} ;
tokenUser: any ;



  taskForm: FormGroup ;
  getId: any;
  updateForm!: FormGroup;
  desactiveForm!: FormGroup;
  StatusUpdateForm: any;



constructor(private taskService: TaskService,
  private supportService: SupportService,
  private fb: FormBuilder,
  public authService: AuthService,
  private recordService: RecordService
)
  {


  this.taskForm = this.fb.group({
    description: new FormControl(''),
    employeeName: new FormControl(''),
    department: new FormControl(''),
    extDepart: new FormControl(''),
    typeTask: new FormControl(''),
    typeRequest: new FormControl(''),
    support_id: new FormControl(''),
  });

  this.StatusUpdateForm = this.fb.group({
    statusTask: new FormControl(''),
  });


 this.updateForm = this.fb.group({
    description: (''),
    employeeName: (''),
    department: (''),
    extDepart: (''),
    typeTask: (''),
    typeRequest: (''),
    support: (''),
  });

  this.desactiveForm = this.fb.group({
    isActive: this.desactive
  });

}

ngOnInit(){
 this.taskService.getTaksAll().subscribe((res: any) =>{ this.ListTasks = res; console.log(this.ListTasks)} );

 this.supportService.getAllSupports().subscribe((res)=>{this.Listsupport = res;})

 }




newTask(){

  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {



   //  this.taskService.addRecord(this.Record).subscribe((res)=>{res})
   this.taskService.addTask(this.taskForm.value).subscribe((res: any)=>{
    this.task = res; this.sendRecord(this.task.id, "Creó una tarea ")  })
      console.log(this.taskForm.value);





   /*    this.Record ={
        "accion": "CREACION",
        "userInSession": decodetoken.id ,
        "task": this.task.id,
        "support": "",
        "user": ""
       } */


    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado',
        'Se ha cancelado crear esta tarea',
        'error'
      )
    }
  });




 }



 sendRecord(id: any, accion: any){

  this.token = this.authService.getToken();
  let decodetoken: any = {};
   decodetoken = decode(this.token);

  this.Record ={
    "accion": accion,
    "userInSession": decodetoken.userName,
    "task": id

  };

  this.recordService.addRecord(this.Record).subscribe((res: any)=>{
    this.resRescord = res; console.log( "RECORD: ", this.Record); })


 }

 editTask(id: any){
  Swal.fire('Tarea editada!');
 this.taskService.update(id, this.updateForm.value).subscribe((res: any)=>{
  this.task = res; this.sendRecord(this.task.id, "Editó una tarea")  })
 }


 updateTask(id:number){
  this.userId = id;

  this.taskService.getTask(id).subscribe((res: any)=>{
    this.updateForm.patchValue({
      description: res['description'],
      employeeName: res['employeeName'],
      department: res['department'],
      extDepart: res['extDepart'],
      typeTask: res['typeTask'],
      typeRequest: res['typeRequest'],
      support: res['support_id'],
    })
  })


 }

 statusTask(id: any, status: any){
  this.taskService.updateStatus(id, this.taskForm.value).subscribe((res: any)=>{
    this.taskStatus = res; })
 }


 // ACTUALIZAR EL ESTADO DE LAS TAREAS

 updateStatus(id:any, text:any):void{

  this.StatusUpdateForm.get('statusTask').setValue(text);
  this.taskService.update(id, this.StatusUpdateForm.value).subscribe((res: any)=>{this.task = res; })
 }

 desactiveTask(id: any){
  Swal.fire({
    title: 'Eliminar?',
    text: 'esta seguro que desea eliminar esta Tarea?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      this.taskService.desactiveTask(id, this.desactiveForm.value).subscribe((res:any)=>{
         this.isActiveTask = res, console.log(this.isActiveTask),
          this.sendRecord(this.isActiveTask.id, "Eliminó una tarea")})
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado',
        'Se ha cancelado eliminar esta tarea',
        'error'
      )
    }
  });
 }






}

