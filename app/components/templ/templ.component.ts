import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templ',
  templateUrl: './templ.component.html',
  styleUrls: ['./templ.component.css']
})
export class TemplComponent implements OnInit{
  title : string;
  haspop : string;
  expan = 'false';
  isSpecial : string;
  price : number;
  
    constructor() { 
    this.title = "hi";
    this.isSpecial = "true";
    this.price = 42;
  }

  ngOnInit() {
    this.haspop ='true';
    
    
  }

}
