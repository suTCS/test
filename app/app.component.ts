import { Component} from '@angular/core';


//selector: 'app-root',
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
  //selector: `app-root`,
  //template: `<p>hello {{name}}</p>`
})
export class AppComponent {
  title = 'tour of heroes';

  clickMessage='';
  onClickMe() {
    this.clickMessage = 'hey hero';
  }

  values ='';
  onKey(event: any) {
    this.values += event.target.value + '|';
  }

  valuesss = '';
  onKeyyy(value: string) {
    this.valuesss += value + '|';
  }

  value1 = '';
  onEnter(value: string) {
    this.value1 += value;
  }
  value2 = '';
  update(value: string) {
    this.value2 += value;
  }

  heros = ['a','b','c','d'];
  addHero(newHero : string) {
    if(newHero) {
      this.heros.push(newHero);
    }
  }

   //name ='haja';
    //name = '';
    name :string;
    constructor() {
        this.name = 'haha';
    }

}






