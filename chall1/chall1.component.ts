import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chall1',
  templateUrl: './chall1.component.html',
  styles: []
})
export class Chall1Component implements OnInit{
  todos : any[];
  name = 'name';
  //todo=['a','b','c'];

  constructor() { 
    
  }

  ngOnInit() {
    this.todos=['a','b','c', 1];
  }
  
  addTodo(newTodo: string ) {
    
    if(newTodo) {
      this.todos.push(newTodo);
    }
  }  

  removeClick(i: any) {
    this.todos.splice(i, 1);
  }

}
