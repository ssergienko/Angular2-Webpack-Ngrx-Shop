import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ContactasComponent } from './contactas';
import { BasketComponent } from './basket';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'contactas',  component: ContactasComponent },
  { path: 'basket',  component: BasketComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
