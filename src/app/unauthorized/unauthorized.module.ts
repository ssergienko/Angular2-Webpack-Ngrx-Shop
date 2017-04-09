import { UnauthorizedComponent } from './unauthorized.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { XLargeDirectiveModule } from '../common/directives/x-large';
import { routes } from './unauthorized.routing';

@NgModule({
  declarations: [
    UnauthorizedComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    XLargeDirectiveModule
  ]
})

export class UnauthorizedModule {
  public static routes = routes;
}
