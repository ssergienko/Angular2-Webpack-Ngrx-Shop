import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'admin',
  styles: [``],
  template: `
    <div class="row admin-page">
      <div class="col-md-12">
        <h1 x-large>Admin page</h1>
        <div>Do you admin job, dude</div>
      </div>
    </div>
  `
})
export class AdminComponent implements OnInit {
  constructor () {
  }
  public ngOnInit() {
  }
}
