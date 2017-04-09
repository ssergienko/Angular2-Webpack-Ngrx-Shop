/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../app.service';
import { Auth } from '../../auth.service';

@Component({
  selector: 'shop-header',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './header.component.scss'
  ],
  template: `
    <div class="row header-block">
      <div class="col-md-3 col-sm-6 col-xs-6">
        <div class="shop-logo">
          <a [routerLink]="['./']">
            МАГАЗИН
          </a>
        </div>
      </div>
      <div class="col-md-6 hidden-xs hidden-sm">
        Search Form
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6">
        <div class="row auth-block text-right">
          <span (click)="auth.login()" *ngIf="!auth.authenticated()">Signup/Signin</span>
          <span (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</span>
          <!--<img [src]="auth.userProfile.picture" alt="" class="profile-img">-->
        </div>
        <div class="row shop-menu-block text-right">
          <div class="basket-block pull-right">
            <a [routerLink]="['/basket']">
              <span class="counter">0</span>
              <svg height="32" width="42">
                <line x1="0" y1="0" x2="6" y2="0" style="stroke:white;stroke-width:5" />
                <line x1="6" y1="0" x2="15" y2="18" style="stroke:white;stroke-width:3" />
                <line x1="15" y1="18" x2="35" y2="18" style="stroke:white;stroke-width:3" />
                <line x1="35" y1="19" x2="40" y2="6" style="stroke:white;stroke-width:3" />
                <circle cx="20" cy="28" r="2"  style="stroke:white;stroke-width:3" />
                <circle cx="32" cy="28" r="2"  style="stroke:white;stroke-width:3" />
              </svg>
              <span class="hidden-xs hidden-sm">Корзина</span>
            </a>
          </div>
          <div class="menu-items text-right">
            <a [routerLink]="['/contactas']">Контакты</a>
            <a [routerLink]="['/orders']">Заказы</a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HeaderComponent implements OnInit {
  public shopLogo = 'assets/img/shop-logo.png';
  public basketImg = 'assets/img/basket.jpg';
  public shopTitle = 'Make your best choise ever!';
  public url = '';
  public basketurl = '';

  constructor(
    public appState: AppState,
    public auth: Auth
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
