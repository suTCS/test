import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page-2',
  templateUrl: './second-page-2.component.html',
  styleUrls: ['./second-page-2.component.css']
})
export class SecondPage2Component implements OnInit {
  page: number;

  constructor() { }

  ngOnInit() {
  }
  
  showPage(page: number) {
    this.page = page;
  }
}
