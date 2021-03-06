import { BasketComponent } from './basket.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './basket.routing';
import { XLargeDirectiveModule } from '../common/directives/x-large';

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    XLargeDirectiveModule
  ],
})

export class BasketModule {
  public static routes = routes;
}
