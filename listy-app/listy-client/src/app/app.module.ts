import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ListComponent } from './list.component';
import { InputFormComponent } from './input-form.component';
import { LoginComponent } from './login.component';

import { ElementService } from './services/element.service';
import { LoginService } from './services/login.service';
import { SharedService } from './services/shared.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule, 
    FormsModule
  ],
  providers: [ 
    ElementService, 
    LoginService,
    SharedService
  ],
  declarations: [ 
    AppComponent,
    ListComponent,
    InputFormComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }