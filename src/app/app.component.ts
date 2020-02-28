import { Component, OnChanges, OnInit, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {
//Angular calls this after a component has been initialized. This is called only once, directly
//after the first ngDoCheck hook is called. Similar to DoCheck but for content projected into the
//component view with ng-content
  ngAfterContentInit(): void {
    alert("4. after content init called");
  }

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
