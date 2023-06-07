import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { TaksComponent } from './taks/taks.component';
import { SupportsComponent } from './supports/supports.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../auth/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecordComponent } from './record/record.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    TaksComponent,
    SupportsComponent,
    PagesComponent,

  LoginComponent,
   RecordComponent ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ], exports:[
    DashboardComponent,
    UsersComponent,
    TaksComponent,
    SupportsComponent,
    LoginComponent,
    ReactiveFormsModule
    ]
})
export class PagesModule { }
