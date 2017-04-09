import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'basket',
  styles: [``],
  template: `
    <div class="row basket-page">
      <div class="col-md-12">
        <h1 x-large>Welcome to basket!</h1>
        <div class="basket">basket</div>
      </div>
    </div>
  `
})
export class BasketComponent implements OnInit {
  constructor () {
  }
  public ngOnInit() {
    // this.appState.set('globalValue: ', 'BasketComponent');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
