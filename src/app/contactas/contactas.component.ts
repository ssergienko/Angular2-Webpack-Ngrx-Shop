import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'contactas',
  styles: [``],
  template: `
    <h1>Contact as motherfucker</h1>
    <br/>
    <br/>
    <br/>
    <form (ngSubmit)="submitState(localState.value)" autocomplete="off">
      <input
        [value]="localState.value"
        (input)="localState.value = $event.target.value"
        placeholder="Submit Local State to App State"
        autofocus>
      <button>Submit Value</button>
    </form>
    <div>this.localState = {{ localState | json }}</div>
    <br/>
    <br/>
    <br/>
  `
})
export class ContactasComponent implements OnInit {
  public ngOnInit() {
    this.appState.set('globalValue: ', 'ContactasComponent');
  }
}
