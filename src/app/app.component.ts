import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
ngOnInit(): void{
  alert("2. on init is called");
}
ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

}

  name: string = 'Christa\'s App';
  title = 'ngcanvas';

  constructor(){
    alert("1. on changes called");
  }
}
