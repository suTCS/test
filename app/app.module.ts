import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './component/todo-input/todo-input.component';

import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './component/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }