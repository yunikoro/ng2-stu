import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../hero-detail/hero';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.searchTerms.debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(term => term ? this.heroService.search(term) : Observable.of<Hero[]>([])).catch(error => {
                          console.log(error);
                          return Observable.of<Hero[]>([]);
                         });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
