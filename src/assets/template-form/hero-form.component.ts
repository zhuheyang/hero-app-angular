import { Component } from '@angular/core';

import { Heroform } from './heroform';

// let myHero = new Heroform(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Roollove');
// console.log('My Hero is called' + myHero.name); // 'My Hero is called SkyDog

@Component({
  // 选择器表示可用<hero-form>标签把这个表单放进父模板
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // module.id属性设置了基地址，用于从相对模块路径加载templateUrl
  model = new Heroform(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHeroform() {
    this.model = new Heroform(42, '', '');
  }

  //TODO: remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}



