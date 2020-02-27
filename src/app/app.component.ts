import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  //called right after your class gets initialized
  //and the component is created, this lifecyle hook is called.
  //this is basically called after the constructor is called
  //and any other time there is a property change w/in a component
  ngOnChanges(changed: import("@angular/core").SimpleChanges): void {

  }
  name: string = 'Christa\'s App';
  title = 'ngcanvas';
  constructor() {
    alert("1. on changes called");
  }
}
