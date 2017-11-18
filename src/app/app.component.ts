import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/hero-reactive-form" routerLinkActive="active">HeroReactiveForm</a>
      <a routerLink="/hero-template-form" routerLinkActive="active">HeroTemplateForm</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
