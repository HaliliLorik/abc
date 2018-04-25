import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/@progress/kendo-theme-default/dist/all.css',
    './app.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ABC Task';
}
