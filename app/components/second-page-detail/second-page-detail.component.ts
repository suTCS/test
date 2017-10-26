import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../../data/hero';



@Component({
  selector: 'app-second-page-detail',
  templateUrl: './second-page-detail.component.html',
  styleUrls: ['./second-page-detail.component.css']
})
export class SecondPageDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
