import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemInterface } from '../common/components/header/cart/item.interface';

const item: ItemInterface = {
    id: 0,
    name: 'Socks',
    price: 1000
};

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private _store: Store<any>
  ) {}
  public ngOnInit() {
    console.log('Home component ngOnInit');
  }
  public addItemToCart() {
    this._store.dispatch({ type: 'ADD_ITEM', payload: item });
  }
}
