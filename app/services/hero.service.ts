import { Injectable } from '@angular/core';
import {Hero} from '../data/hero';
import {HEROES} from '../data/hero-data';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {  //Promise and resolve are keyword.  Promise is that when the data is ready, it returns
    return Promise.resolve(HEROES);
  }

  constructor() { }

}
