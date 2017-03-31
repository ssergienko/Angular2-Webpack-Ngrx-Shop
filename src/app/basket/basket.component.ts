import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'basket',
  styles: [``],
  template: `
    <h1 x-large>Welcome to basket!</h1>
    <div class="basket">basket</div>
  `
})
export class BasketComponent implements OnInit {
  public ngOnInit() {
    // this.appState.set('globalValue: ', 'BasketComponent');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
