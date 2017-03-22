/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'shop-header',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './header.component.scss'
  ],
  template: `
    <div class="shop-logo">
      <a [routerLink]="['./']">
        <img [src]="shopLogo" />
      </a>
    </div>
    <div class="right-side">
      <div class="shop-links">
        <a [routerLink]="['/contactas']">Contact As</a>
        <a href="singupsignin">Signup/Signin</a>
      </div>
      <div class="basket">
        <a [routerLink]="['/basket']">
          <img [src]="basketImg" />
        </a>
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
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
