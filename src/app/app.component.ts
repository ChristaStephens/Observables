import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnChanges() {

  }
  name: string = 'Christa\'s App';
  title = 'ngcanvas';
  constructor() {

  }
}
