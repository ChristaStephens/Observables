import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck {
  //Do check is called during every change detection run. Angular has an
  //internal system that goes around the component processes every so often
  //looking for changes that the complier cannot detect on its own. this hook
  //is called at every change detection run, usually after ngOnInit.
  ngDoCheck(): void {
    alert("3. do check is called");
  }
  ngOnInit(): void {
    alert("2. on init is called");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

  }
  name: string = 'Christa\'s App';
  title = 'ngcanvas';
  constructor() {
    alert("1. on changes called");
  }
}
