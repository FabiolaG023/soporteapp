import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './services/token.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    PagesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
     { provide: HTTP_INTERCEPTORS,
      useClass: TokenService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
