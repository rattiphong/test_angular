import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectHero:Hero;
  hero:Hero = {
    id:1,
    name : 'thep'
  };
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero:Hero): void{
    this.selectHero = hero;
  }

}
