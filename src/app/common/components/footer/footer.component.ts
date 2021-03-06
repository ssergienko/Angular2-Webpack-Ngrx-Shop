import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
// import { AppState } from '../../../app.service';

@Component({
  selector: 'shop-footer',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './footer.component.scss'
  ],
  template: `
    <span></span>
  `
})
export class FooterComponent implements OnInit {
  public ngOnInit() {
    console.log('Footer component ngOnInit');
  }
}
