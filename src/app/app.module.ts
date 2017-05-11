import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { NoContentComponent } from './no-content';
import { XLargeDirectiveModule } from './common/directives/x-large';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header';
import { FooterComponent } from './common/components/footer';
import { AppRoutingModule }   from './app.routes';

import { AUTH_PROVIDERS }          from 'angular2-jwt';
import { Auth } from './auth/auth.service';

// store
import { StoreModule } from '@ngrx/store';
// reducer
import { cartReducer } from './common/components/header/cart/cart.reducer';

import '../styles/styles.scss';
import '../styles/headings.css';

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NoContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    XLargeDirectiveModule,
    StoreModule.provideStore({ cart: cartReducer })
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
    AUTH_PROVIDERS,
    Auth
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
    console.log('app module init');
  }
  private hmrOnInit(store) {
    if (!store || !store.state) { return; }
    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }
  private hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.state = { data: 'yolo' };
    store.restoreInputValues  = createInputTransfer();
    removeNgStyles();
  }
  private hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
