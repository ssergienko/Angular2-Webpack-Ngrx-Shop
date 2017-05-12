import { ActionReducer, Action } from '@ngrx/store';
import { CartInterface } from './cart.interface';

const initialState: CartInterface = {
    items: []
};

export function CartReducer(state: CartInterface = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_ITEM':
      state.items.push(action.payload);
      return state;
    case 'REMOVE_ITEM':
      return state.items.slice(-1);
    default:
      return state;
  }
}
