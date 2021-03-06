import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {

    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['login']);
    }

    return this.authService.isLoggedIn;
  }


}
