import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { SupportService } from "src/app/services/support.service";
import decode from 'jwt-decode';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userData: any =[]
  user: any =[]
  currentUser: Object = {};
  viewUserName: any= [];

  pendiente: any ;
  status: any = [];


  supCount = [];


  token: any = {} ;
  tokenUser: any ;

  constructor( private authService: AuthService,  private router: Router, private taskService: TaskService, private supportService: SupportService ){}

  ngOnInit(){

    this.token = this.authService.getToken();
     let decodetoken: any = {};
      decodetoken = decode(this.token);

      const data=  this.authService.getUserProfile(decodetoken.id).subscribe((res: any)=>{ this.viewUserName= res;})
      this.taskService.getStatusTask().subscribe((res)=>{this.status = res, this.pendiente = this.status[1].length;})
      this.supportService.getAllSupports().subscribe((res: any)=>{ this.supCount = res.length;})


    if (!data) {

      this.router.navigate(['login']);

    }

    return data

   }




}
