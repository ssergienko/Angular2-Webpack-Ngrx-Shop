import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'contactas',
  styles: [``],
  template: `
    <h1 x-large>Contact as motherfucker</h1>
    <div>contactas</div>
  `
})
export class ContactasComponent implements OnInit {
  public ngOnInit() {
    console.log('ContactasComponent');
  }
}
