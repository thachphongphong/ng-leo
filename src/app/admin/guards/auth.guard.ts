import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

       // not logged in so redirect to login page with the return url
       this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url }});
       return false;
  }
}
