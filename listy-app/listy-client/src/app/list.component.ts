import { Component, OnInit } from '@angular/core';
import { ElementService } from './services/element.service';
import { SharedService } from './services/shared.service';
import 'rxjs/Rx';

@Component({
  selector: 'element-list',
  template: `
    <ul>
      <li *ngFor="let element of elements">{{ element }}</li>
    </ul>
  `,
})
export class ListComponent implements OnInit{ 
  elements = ["test1", "test2", "test3"];
  
  constructor(private elementService:ElementService, private _sharedService: SharedService){
    this._sharedService.listUpdateNeeded$.subscribe(
      data => {
        this.getElements();
      });
  }

  ngOnInit(){
    this.getElements();
  }

  private getElements(){
    this.elementService.getElements()
      .subscribe((result) => {
        this.elements = result.elements
    });
  }

}