import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './auth.gard';
import { ContactasResolver } from './contactas/contactas.resolver';
import { BasketResolver } from './basket/basket.resolver';
import { OrdersResolver } from './orders/orders.resolver';

export const routes: Routes = [
  { path: '', loadChildren: './home#HomeModule' },
  { path: 'home',  loadChildren: './home#HomeModule' },
  { path: 'admin', loadChildren: './admin#AdminModule', canActivate: [AuthGuard] },
  { path: 'unauthorized', loadChildren: './unauthorized#UnauthorizedModule' },
  { path: 'contactas', loadChildren: './contactas#ContactasModule', resolve: {
    redirectUrl: ContactasResolver }},
  { path: 'orders', loadChildren: './orders#OrdersModule', resolve: {
    redirectUrl: OrdersResolver }},
  { path: 'basket', loadChildren: './basket#BasketModule',
    resolve: { redirectUrl: BasketResolver }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    ContactasResolver,
    BasketResolver,
    OrdersResolver]
})

export class AppRoutingModule {
  constructor (private route: ActivatedRoute) {

  }
}
