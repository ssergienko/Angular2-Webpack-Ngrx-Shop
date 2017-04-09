import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor (private route: ActivatedRoute) {
  }
  public ngOnInit() {
  }
}
