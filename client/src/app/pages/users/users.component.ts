import { Component, NgZone } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import decode from 'jwt-decode';

import Swal from 'sweetalert2';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  newUserForm: FormGroup;
  updateForm: FormGroup;

  userCheck: any =[];

  userdata: any  = [];
  userView: any = [];
  updateUser: any = [];

  isActive: number = 0

  token: any = {} ;
  tokenUser: any ;
  resRescord: any =[];

  Record: any ={};

  Name: any = [];
  userId: number = 0;


 constructor(private userServices:UsersService,
  public authService: AuthService,
  private fb: FormBuilder,
  public recordService: RecordService


  ){

    this.newUserForm = this.fb.group({
      userName: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl(''),
      rol: new FormControl(''),
    });

    this.updateForm= this.fb.group({
      userName: (''),
      password: (''),
      name: (''),
      tel: (''),
      email: (''),
      rol: (''),
    });
  }

 ngOnInit(){



 // this.authService.check().subscribe((res: any)=>{ this.userCheck = res})
  this.token = this.authService.getToken();
  let decodetoken: any = {};
   decodetoken = decode(this.token);
  this.authService.getUserProfile(decodetoken.id).subscribe((res: any)=>{ this.userCheck= res })

  this.userServices.getAllUsers().subscribe((res:any)=>{this.userView = res})
  }




  newUser(){
    // al cargar la pagina no acepta el token
   this.userServices.createUser(this.newUserForm.value).subscribe((res: any)=>{
    this.userdata = res,
   this.sendRecord(this.userdata.name, "Creó un usuario")
 // console.log(this.userdata)
    //Swal.fire('Nuevo usuario!');
    localStorage.setItem('access_token', res.token);
    //  this.router.navigate(['/dashboard']);
    })



  }

  editUser(id: number, ){
  //  console.log('ID:',id,'DATA:',this.updateForm.value);
    this.userServices.update(id, this.updateForm.value).subscribe((res: any)=>{
      this.updateUser = res, this.sendRecord(this.updateUser.name, "Editó un usuario")})
  }

  update(id: number){
    this.userId = id;


    this.userServices.getUser(id).subscribe((res: any)=>{
      this.Name = res['name'];
       this.updateForm.patchValue({
        userName: res['userName'],
        password: res['password'],
        name: res['name'],
        tel: res['tel'],
        email: res['email'],
        rol: res['rol'],
      });
    });



  }

  deleteUser(id: any, i: any){
   this.userServices.deleteUser(id).subscribe((res: any)=>{
     this.userdata = res, this.sendRecord(this.userdata.name, "Eliminó un usuario") , console.log(res.isActive)})
 //  window.location.reload()
  }

  sendRecord(user: any, accion: any){

    this.token = this.authService.getToken();
    let decodetoken: any = {};
     decodetoken = decode(this.token);

    this.Record ={
      "accion": accion,
      "userInSession": decodetoken.userName ,
      "user": user

    };

    this.recordService.addRecord(this.Record).subscribe((res: any)=>{this.resRescord = res, console.log( "RECORD: ", this.Record); })


   }

}
