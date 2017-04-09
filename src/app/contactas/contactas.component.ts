import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contactas',
  styles: [``],
  template: `
    <div class="row contactas-page">
      <div class="col-md-12">
        <h1 x-large>Contact as here</h1>
        <div>contact as</div>
      </div>
    </div>
  `
})
export class ContactasComponent implements OnInit {
  constructor (private route: ActivatedRoute) {
  }
  public ngOnInit() {
  }
}
