import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor (private route: ActivatedRoute) {
  }
  public ngOnInit() {
    console.log('redirect_url', '/basket');
    localStorage.setItem('redirect_url', '/basket');
    // this.appState.set('globalValue: ', 'BasketComponent');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
