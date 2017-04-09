import { OrdersComponent } from './orders.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './orders.routing';
import { XLargeDirectiveModule } from '../common/directives/x-large';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    XLargeDirectiveModule
  ],
})

export class OrdersModule {
  public static routes = routes;
}
