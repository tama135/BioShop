import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';
import {map,take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
    private firebaseAuth: AngularFireAuth

  ){ }

  // canActivate(): Observable<boolean> {
  //   return this.authService.pipe(map(user => {
  //     if (user != null)
  //       return true
  //     this.router.navigate(['/login'])
  //   }))
  //   .take(1) // To make the observable complete after the first emission
  // }


    canActivate(): Observable<boolean>| Promise<boolean> | boolean {
      return this.firebaseAuth.authState.pipe(take(1),map(user => {
        if(user !== null)
          return true;
        this.router.navigate(['login'])
      }));
  }




  // canActivate(
  //   next:ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if(this.authService.isLoggedIn !== true){
  //     this.router.navigate(['login'])
  //   }
  //   return true;
  //  }





}
