import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-chall1',
  templateUrl: './chall1.component.html',
  styles: []
})
export class Chall1Component implements OnInit{
  todos : any[];
  

  constructor(private dataservice : DataService) { 
    
  }

  ngOnInit() {
   // this.todos=['a','b','c', 1];
   this.todos = this.dataservice.todos;
  }
  
  addTodo(newTodo: string ) {  
    if(newTodo) {
      this.todos.push(newTodo);
    }
  }  

  removeTodo(i: number) {
    this.todos.splice(i, 1);
  }

}
