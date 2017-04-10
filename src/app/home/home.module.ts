import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './home.routing';
import { XLargeDirectiveModule } from '../common/directives/x-large';
import { CategoryMenuComponent } from '../common/components/category-menu/category-menu.component';
import { CategoryMenuService } from '../common/components/category-menu/category-menu.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryMenuComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    XLargeDirectiveModule,
    CommonModule
  ],
  providers: [
    CategoryMenuService
  ]
})

export class HomeModule {
  public static routes = routes;
}
