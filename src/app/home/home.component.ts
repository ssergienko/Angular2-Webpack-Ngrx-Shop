import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

  constructor() {}

  public ngOnInit() {}

}
