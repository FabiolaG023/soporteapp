import { Component, OnInit, NgZone } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    signinForm: FormGroup ;
    currentUser = {};




  constructor(
   private fb: FormBuilder,
   private authService: AuthService,
   private router: Router,
    private route: ActivatedRoute) {

      this.signinForm = this.fb.group({});
     }

  ngOnInit() {

    this.signinForm = this.fb.group({
      userName: new FormControl (''),
      password: new FormControl (''),
    });
  }

  loginUser() {
   console.log(this.signinForm.value)
  this.authService.signIn(this.signinForm.value) .subscribe((res: any) => {
    localStorage.setItem('access_token', res.token);
    console.log(res)
    this.authService.getUserProfile(res.id).subscribe((res) => {
      console.log(res.userName)
      this.currentUser = res.userName;
     // this.router.navigate(['dashboard/'+res.id]);
     this.router.navigate(['/dashboard/']);
    });
   });

  }
  }



  export default function logOut() {
    localStorage.removeItem('token');}









