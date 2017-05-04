import { Injectable } from '@angular/core';

import { MenuItem } from './category-menu.item';
import { MenuItems } from './category-menu.mock';

@Injectable()
export class CategoryMenuService {
  public getCategories(): Promise<MenuItem[]> {
    return Promise.resolve(MenuItems);
  }
}
