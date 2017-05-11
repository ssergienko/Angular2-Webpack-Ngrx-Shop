// app/auth.guard.ts
import { Injectable }             from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate }    from '@angular/router';
import { Auth }                   from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {}

  public canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.authenticated()) {
      if (this.auth.isAdmin()) {
        return true;
      } else {
        this.router.navigate(['unauthorized']); // @todo: change to 'nopermitted'
        return false;
      }
    } else {
      if (state.url === '/admin') {
        localStorage.setItem('redirect_url', state.url);
      }
      this.auth.login();
      return false;
    }
  }
}
