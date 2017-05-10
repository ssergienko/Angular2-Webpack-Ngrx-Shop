import { ActionReducer, Action } from '@ngrx/store';

export function cartReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return state + 1;
    case 'REMOVE_ITEM':
      return state - 1;
    default:
      return state;
  }
}
