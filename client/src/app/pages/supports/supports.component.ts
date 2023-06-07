import { Component,  OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SupportService } from 'src/app/services/support.service';
import { TaskService } from "src/app/services/task.service";
import Swal from 'sweetalert2';
import decode from 'jwt-decode';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-supports',
  templateUrl: './supports.component.html',
  styleUrls: ['./supports.component.scss']
})
export class SupportsComponent implements OnInit {

  ListSupports: any = [];
  support: any = [];
  supportRes: any =[];
  data: any = [];
  desactive: boolean = false;

  supportForm: FormGroup;
  updateForm: FormGroup;
  desactiveForm: FormGroup;

  Name: any = [];
  getId: number = 0 ;

  Record: any ={};
  token: any = {} ;
  resRescord: any =[];


  constructor(private supportService: SupportService,
    private fb: FormBuilder,
    public authService: AuthService,
    private recordService: RecordService
    ){

    this.supportForm = this.fb.group({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('')
    });

    this.updateForm = this.fb.group({
      name: (''),
      phone: (''),
      email: ('')
    })

    this.desactiveForm = this.fb.group({isActive: this.desactive});
  }



  ngOnInit(): void{
    this.supportService.getAllSupports().subscribe((res: any)=> { this.ListSupports = res;})
  }

newSupport(){
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
     this.supportService.addSupport(this.supportForm.value).subscribe((res: any)=>{
       this.data = res,  this.sendRecord( this.data.name, "Creó un soporte")})

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado',
        'Se ha cancelado crear esta tarea',
        'error'
      )
    }
  });
}

sendRecord(data: any, accion: any){

  this.token = this.authService.getToken();
  let decodetoken: any = {};
   decodetoken = decode(this.token);

  this.Record ={
    "accion": accion,
    "userInSession": decodetoken.userName,
    "support": data

  };

  this.recordService.addRecord(this.Record).subscribe((res: any)=>{
    this.resRescord = res, console.log( "RECORD: ", this.Record); })

}


editSupport(id: any){
   // Swal.fire('Tarea editada!');
// NO ME DEVUELVE EL ID DEL SOPORTE
 this.supportService.updateSupport(id,this.updateForm.value).subscribe((res: any)=>{
  this.supportRes = res, this.sendRecord(this.supportRes.name, "Editó un soporte")})
 //this.taskService.update(id, this.updateForm.value).subscribe((res: any)=>{this.task = res;  })
}

desactiveSupport(id: number){

  this.supportService.desactiveSupport(id, this.desactiveForm.value).subscribe((res: any)=>{
    this.support = res,
    this.sendRecord(this.support.name, "Eliminó un soporte")})
}

update(id: number){

this.getId = id;
 this.supportService.getOneSupport(id).subscribe((res:any)=>{
 this.Name = res['name'];
  this.updateForm.patchValue({
    name: res['name'],
    phone: res['phone'],
    email: res['email'],
  })
 })
}


}
