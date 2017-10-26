import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Chall1Component } from './componenets/chall1/chall1.component';
import { HeaderComponent } from './header/header.component';
import { TemplComponent } from './components/templ/templ.component';

import {HeaderModule} from './header/header-routing.module';
import { SecondPageComponent } from './components/second-page/second-page.component';
import {FormsModule} from '@angular/forms';
import { SecondPageDetailComponent } from './components/second-page-detail/second-page-detail.component';
import { SecondPage2Component } from './components/second-page-2/second-page-2.component';
import { SecondPage2ChildComponent } from './components/second-page-2/second-page-2-child/second-page-2-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Chall1Component,
    HeaderComponent,
    TemplComponent,
    SecondPageComponent,
    SecondPageDetailComponent,
    SecondPage2Component,
    SecondPage2ChildComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
