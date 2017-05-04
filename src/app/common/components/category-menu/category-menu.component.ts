import { Component, OnInit } from '@angular/core';
import { CategoryMenuService } from './category-menu.service';
import { MenuItem } from './category-menu.item';

@Component({
  selector: 'category-menu',
  styleUrls: ['./category-menu.component.scss'],
  templateUrl: './category-menu.component.html'
})

export class CategoryMenuComponent implements OnInit {
  public categories: MenuItem[];
  constructor (
    public catMenuService: CategoryMenuService
  ) {}
  public ngOnInit() {
    this.getCategories();
  }
  public getCategories(): void {
    this.catMenuService.getCategories().then((categories) => this.categories = categories);
  }
}

/* implements OnInit {

  /* constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}*/
