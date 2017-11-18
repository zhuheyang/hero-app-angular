import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import 'rxjs/add/operator/delay';

import { Herodata, heroesdata} from './data-model';

@Injectable()

export class HerodataService {
  delayMs = 500;

  // Fake server get; assume nothing can go wrong;
  getHeroesdata(): Observable<Herodata[]> {
    return of(heroesdata).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHerodata(herodata: Herodata): Observable<Herodata> {
    const oldHero = heroesdata.find(h => h.id === herodata.id);
    const newHero = Object.assign(oldHero, herodata); // Demo: mutate cached hero
    return of(newHero).delay(this.delayMs);  // simulate latency with delay
  }
}
