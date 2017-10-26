import { Component, OnInit } from '@angular/core';

import {Hero} from '../../data/hero';
import {HeroService} from '../../services/hero.service';
//import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'], 
  providers: [HeroService]
})
export class SecondPageComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService : HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); //callback function, arrow function
  }

  onselect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
