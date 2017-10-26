import { Component } from '@angular/core';
import {Chall1DataService} from './services/chall1-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Chall1DataService]
})
export class AppComponent {
  title = 'app';
}
