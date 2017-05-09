import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <div class="wrapper">
      <shop-header></shop-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
    <shop-footer></shop-footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    private auth: Auth
  ) {}

  public ngOnInit() {
    console.log('App component ngOnInit');
  }

}
