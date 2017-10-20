import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
//import { ComponentsComponent } from './components/components.component';
import {HelloComponent} from './simpleAdd';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
   // ComponentsComponent, 
    HelloComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



