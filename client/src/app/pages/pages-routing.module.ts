import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SupportsComponent } from './supports/supports.component';
import { TaksComponent } from './taks/taks.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from "../shared/auth.guard";
import {RoleGuard  } from "../shared/role.guard";
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  {path: 'dashboard', component: PagesComponent,
  children:[
    {path: '', component:DashboardComponent, canActivate: [AuthGuard]},
    { path: 'users', component: UsersComponent,canActivate: [RoleGuard],data: { expectedRole: 'ADMIN'}},
    { path: 'support', component: SupportsComponent, canActivate: [AuthGuard]},
    { path: 'tasks', component: TaksComponent, canActivate: [AuthGuard] },
    { path: 'record-print', component: RecordComponent, canActivate: [AuthGuard] }
  ], canActivate: [AuthGuard]
}
 ];// canActivate:[RoleGuard], data: { expectedRole: 'ADMIN'}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
