import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { NoContentComponent } from './no-content';
import { XLargeDirectiveModule } from './common/directives/x-large';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header';
import { FooterComponent } from './common/components/footer';
import { AppRoutingModule }   from './app.routes';

import { AUTH_PROVIDERS }          from 'angular2-jwt';
import { Auth } from './auth.service';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

type StoreType = {
  // state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NoContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [ // import Angular's modules
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    XLargeDirectiveModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AUTH_PROVIDERS,
    Auth
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef
  ) {}

  /* public hmrOnInit(store: StoreType) {}
  public hmrOnDestroy(store: StoreType) {}
  public hmrAfterDestroy(store: StoreType) {} */

}
