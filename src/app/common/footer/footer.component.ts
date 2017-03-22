import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'shop-footer',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './footer.component.scss'
  ],
  template: `
    <div>this.localState = {{ localState | json }}</div>
    <span>Online Shop Footer</span>
  `
})
export class FooterComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
