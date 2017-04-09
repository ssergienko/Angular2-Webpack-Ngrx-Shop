import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
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
    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    private auth: Auth
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
