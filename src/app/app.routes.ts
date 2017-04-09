import { HomeComponent } from './home';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './auth.gard';
import { ContactasResolver } from './contactas/contactas.resolver';
import { BasketResolver } from './basket/basket.resolver';
import { OrdersResolver } from './orders/orders.resolver';

export const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'admin', loadChildren: './admin#AdminModule', canActivate: [AuthGuard] },
  { path: 'unauthorized', loadChildren: './unauthorized#UnauthorizedModule' },
  { path: 'contactas', loadChildren: './contactas#ContactasModule', resolve: { redirectUrl: ContactasResolver } },
  { path: 'orders', loadChildren: './orders#OrdersModule', resolve: { redirectUrl: OrdersResolver } },
  { path: 'basket', loadChildren: './basket#BasketModule', resolve: { redirectUrl: BasketResolver } }
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
