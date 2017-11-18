import { Component, OnInit} from "@angular/core";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/finally';

import { Herodata } from './data-model'
import { HerodataService} from "./herodata.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})


export class HeroListComponent implements OnInit {
  heroesdata: Observable<Herodata[]>;
  isLoading = false;
  selectedHerodata : Herodata;

  constructor(private herodataService: HerodataService) {}

  ngOnInit() {
    this.getHeroesdata();
  }

  getHeroesdata() {
    this.isLoading = true;
    this.heroesdata = this.herodataService.getHeroesdata()
      .finally(() => this.isLoading = false);
    this.selectedHerodata = undefined;
  }

  select(herodata: Herodata) {
    this.selectedHerodata = herodata;
  }
}
