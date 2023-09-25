import { Component } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title : string = 'Hello from App Component';
  // count : number = 90;

  printDate = new Date(2017,4,15,15,18,25)
}
