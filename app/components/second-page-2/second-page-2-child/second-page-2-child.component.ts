import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-page-2-child',
  templateUrl: './second-page-2-child.component.html',
  styleUrls: ['./second-page-2-child.component.css']
})
export class SecondPage2ChildComponent implements OnInit {
  pages =[1,2,3];
  constructor() { }

  ngOnInit() {
  }

  clickPage(page: number) {
    this.pageChanged.emit(page);
  }
  @Output()
  pageChanged: EventEmitter<number> = new EventEmitter();
}
