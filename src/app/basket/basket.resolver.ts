import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BasketResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let redirectUrl = '';
    if (state.url === '/basket') {
      console.log('redirect_url:', state.url);
      localStorage.setItem('redirect_url', state.url);
      redirectUrl = state.url;
    }
    return Observable.of({ redirectUrl: redirectUrl });
  }
}
