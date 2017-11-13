import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';  // 引入当前文件夹中的app.component.ts文件中export输出的AppComponent
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';


@NgModule({
  // 以下declarations, imports以及bootstrap(引导)都是数组
  // 使用[..,..,..]隔开,注意换行
  imports: [
    BrowserModule,
    FormsModule, //   <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,   // Register HTTP services
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    // 每个组件都必须要在有且只有一个的Angular模块(app.module.ts)中声明
    // 在这里import引入,并将对应的组件添加到declarations数组中.
    AppComponent,   // AppComponent在app.component.ts中有被export出来
    DashboardComponent,
    HeroDetailComponent,   // HeroDetailComponent在hero-detail.component.ts中有被export出来
    HeroesComponent,
    HeroSearchComponent
  ],
  // 在providers数组中注册全应用级的服务
  providers: [
    HeroService
  ],   // 暂时还不知道providers(提供者)数组的作用
  bootstrap: [AppComponent]  // AppComponent在app.component.ts中有被export出来
})

export class AppModule { }
