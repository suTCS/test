import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TemplComponent} from '../components/templ/templ.component';
import {SecondPageComponent} from '../components/second-page/second-page.component';
import {SecondPage2Component} from '../components/second-page-2/second-page-2.component';

const routes: Routes =[
  {path: '', redirectTo: 'templ', pathMatch: 'full'},
  {path: 'templ', component: TemplComponent},
  {path: 'second-page', component: SecondPageComponent},
  {path: 'second-page-2', component: SecondPage2Component}
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class HeaderModule { }
