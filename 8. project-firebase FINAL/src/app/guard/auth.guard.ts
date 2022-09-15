import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,

  ) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState.pipe(take(1), map(user => {
      if (user !== null)
        return true;
        
      this.router.navigate(['login'])}
      ));

  }

}
