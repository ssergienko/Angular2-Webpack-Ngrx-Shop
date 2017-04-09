import { HomeComponent } from './home';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './auth.gard';

export const routes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'admin', loadChildren: './admin#AdminModule', canActivate: [AuthGuard] },
  { path: 'unauthorized', loadChildren: './unauthorized#UnauthorizedModule' },
  { path: 'contactas', loadChildren: './contactas#ContactasModule' },
  { path: 'orders', loadChildren: './orders#OrdersModule' },
  { path: 'basket', loadChildren: './basket#BasketModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {
  constructor (private route: ActivatedRoute) {
    
  }
}
