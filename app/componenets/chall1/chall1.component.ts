import { Component, OnInit } from '@angular/core';
import {Chall1DataService} from '../../services/chall1-data.service';

@Component({
  selector: 'app-chall1',
  templateUrl: './chall1.component.html',
  styleUrls: ['./chall1.component.css']
})
export class Chall1Component implements OnInit {
  todos : any[];

  constructor(private chall1dataservice : Chall1DataService) { }

  ngOnInit() {
    this.todos = this.chall1dataservice.todos;
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
