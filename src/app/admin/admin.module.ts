import { AdminComponent } from './admin.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './admin.routing';
import { XLargeDirectiveModule } from '../common/directives/x-large';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    XLargeDirectiveModule
  ]
})

export class AdminModule {
  public static routes = routes;
}
