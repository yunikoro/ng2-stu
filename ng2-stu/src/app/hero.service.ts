import { Injectable } from '@angular/core';
import { Hero } from './hero-detail/hero';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  private heroUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'aplication/json'})

  constructor(private http: Http) { };

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroUrl)
                     .toPromise()
                     .then(response => response.json().data as Hero[])
                     .catch(this.handleError);
  };
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroUrl, JSON.stringify({ name: name }), { headers: this.headers })
                     .toPromise()
                     .then(res => res.json().data as Hero).catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers}).toPromise()
                     .then(() => hero)
                     .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.delete(url).toPromise()
                     .then(() => null)
                     .catch(this.handleError);
  }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`api/heroes/?name=${term}`)
                     .map(response => response.json().data as Hero[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('a error occured', error);
    return Promise.reject(error.message || error);
  };
}
