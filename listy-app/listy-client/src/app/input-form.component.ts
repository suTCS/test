import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElementService } from './services/element.service';
import { SharedService } from './services/shared.service';
import 'rxjs/Rx';

@Component({
  selector: 'element-add',
  template: `
    <form #inputForm="ngForm" (ngSubmit)="addElement(inputForm)">
      <label for="element">Element</label>
      <input type="text" name="element" id="element" ngModel>

      <button type="submit">Add</button>
    </form>
  `,
})
export class InputFormComponent {

  constructor(private elementService:ElementService, private _sharedService: SharedService){}

  addElement(form: NgForm) {
    console.log(form.value);
    this.elementService.addElement(form.value)
      .subscribe((result) => {
        this._sharedService.publishData("update");
    });
  }

}