import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'basket',
  styles: [``],
  template: `
    <h1>Welcome to basket!</h1>
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
export class BasketComponent implements OnInit {
  public ngOnInit() {
    this.appState.set('globalValue: ', 'BasketComponent');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
