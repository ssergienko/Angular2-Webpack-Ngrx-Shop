import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router, NavigationStart }          from '@angular/router';
import { myConfig }        from './auth.config';
import 'rxjs/add/operator/filter';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  private lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  // Store profile object in auth class
  private userProfile: any;

  constructor(private router: Router) {
    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log('Authentication error');
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        let redirectUrl: string = localStorage.getItem('redirect_url');
        if (redirectUrl) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirect_url');
        }
      });
      this.lock.hide();
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public isAdmin() {
    return this.userProfile.name === 'sergey.s.sergienko@gmail.com';
    /*return this.userProfile && this.userProfile.app_metadata
      && this.userProfile.app_metadata.roles
      && this.userProfile.app_metadata.roles.indexOf('admin') > -1;*/
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('redirect_url');
    this.userProfile = undefined;
    this.router.navigate(['']);
  };
};
