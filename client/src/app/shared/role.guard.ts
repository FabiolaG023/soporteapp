import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
/*   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const expectedRole = route.data['expectedRole'];
      // const expectedRole = route.data.expectedRole;
       const token:any = localStorage.getItem('token');
      // devuelve el valor del token descodificado
       let decodetoken:any = {};
       decodetoken = decode(token);
       console.log('el rol es: ',decodetoken.rol);
      // comprueba si el rol es el correcto Admin
       if( !this.authService.isLoggedIn() || decodetoken.rol !== expectedRole){
       window.alert('Usuario no autorizado para la vista')

         this.router.navigate(['dashboard']);
         return false;
       }

    return true;
  } */

  role: any;
    constructor(
      public authService: AuthService,
      public router: Router,
    ){ }


    canActivate(route: ActivatedRouteSnapshot): boolean{
      //obtengo el rol del usuerio activo
      const expectedRole = route.data['expectedRole'];
      //obtengo el token
       const token:any = localStorage.getItem('access_token');
       let decodetoken: any = {};
       // descodifico el token y optengo su informacion
       decodetoken = decode(token);
      // comprueba si el rol es el correcto Admin
       if( !this.authService.isLoggedIn() || decodetoken.rol !== expectedRole){
       window.alert('Usuario no autorizado para la vista')
         this.router.navigate(['dashboard']);
         return false;
       }
       return true;
      }

}
