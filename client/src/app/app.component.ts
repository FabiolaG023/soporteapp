import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService) { }
  logout() {
    this.authService.doLogout()
  }

  }

  export default function logOut() {
    localStorage.removeItem('token');}



