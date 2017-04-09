import { HomeComponent } from './home';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'contactas', loadChildren: './contactas#ContactasModule' },
  { path: 'orders', loadChildren: './orders#OrdersModule' },
  { path: 'basket', loadChildren: './basket#BasketModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
