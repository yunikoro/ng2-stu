import {Component, OnInit} from '@angular/core';
import { Hero } from '../hero-detail/hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };
  getHeros(): Hero[] {
    this.heroService.getHeroes().then(heroes => {this.heroes = heroes});
    return [];
  }

  add(name: string): void {
    if (!name) {
      return;
    }
    this.heroService.create(name).then(hero => this.heroes.push(hero));
    this.selectedHero = null;
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id).then();
  }

  ngOnInit(): void {
    this.getHeros();
  };
  constructor(private heroService: HeroService) {}

}



