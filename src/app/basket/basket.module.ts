import { BasketComponent } from './basket.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './basket.routing';

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})

export class BasketModule {
  public static routes = routes;
}
