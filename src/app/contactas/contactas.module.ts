import { ContactasComponent } from './contactas.component';
import { RouterModule }        from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './contactas.routing';

@NgModule({
  declarations: [
    ContactasComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
})

export class ContactasModule {
  public static routes = routes;
}
