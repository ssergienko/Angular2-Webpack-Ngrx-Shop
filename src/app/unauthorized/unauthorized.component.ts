import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'unauthorized',
  styles: [``],
  template: `
    <div class="row unauthorized-page">
      <div class="col-md-12">
        <h1 x-large>Не авторизован</h1>
        <div>Не хватает прав для просмотра cтраницы</div>
      </div>
    </div>
  `
})
export class UnauthorizedComponent implements OnInit {
  public ngOnInit() {
    console.log('UnauthorizedComponent');
  }
}
