import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {


  constructor(private authService: AuthService) { }

  intercept( req : HttpRequest<any>, next : HttpHandler ){
    const authToken = this.authService.getToken();
    //const token = localStorage.getItem('token');
    const tokenHeader = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next.handle(tokenHeader);
  }


}
