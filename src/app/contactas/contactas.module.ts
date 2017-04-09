import { ContactasComponent } from './contactas.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './contactas.routing';
import { XLargeDirectiveModule } from '../common/directives/x-large';

@NgModule({
  declarations: [
    ContactasComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    XLargeDirectiveModule
  ]
})

export class ContactasModule {
  public static routes = routes;
}
