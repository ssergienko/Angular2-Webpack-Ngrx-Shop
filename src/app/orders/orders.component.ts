import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'oreders',
  styles: [``],
  template: `
    <div class="row orders-page">
      <div class="col-md-4">
        <h1 x-large>Your orders</h1>
        <div>orders</div>
      </div>
    </div>
  `
})
export class OrdersComponent implements OnInit {
  public ngOnInit() {
    console.log('OrdersComponent');
  }
}
