import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入FormsModule
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

// #1 import module
import { ReactiveFormsModule} from "@angular/forms";

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

// 模板驱动表单
import { HeroFormComponent } from '../assets/template-form/hero-form.component';

// 表单验证引入的相关模块
// import { HeroFormReactive} from "../assets/reactive-form/hero-form-reactive.component";
import { ForbiddenValidatorDirective } from '../assets/shared/forbidden-name.directive'

// 响应式表单模块
import { HeroDetailFormComponent} from "../assets/reactive-form/hero-detail-form.component";
import {HerodataService} from "../assets/reactive-form/herodata.service";
import {HeroListComponent} from "../assets/reactive-form/hero-list.component";


@NgModule({
  // 以下declarations, imports以及bootstrap(引导)都是数组
  // 使用[..,..,..]隔开,注意换行
  imports: [
    BrowserModule,
    // 将FormsModule添加到ngModel装饰器的imports列表中,
    // 则应用能访问模板驱动表单的所有特性
    FormsModule, //   <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,   // Register HTTP services
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    // 响应式表单声明
    ReactiveFormsModule
  ],
  declarations: [
    // 每个组件都必须要在有且只有一个的Angular模块(app.module.ts)中声明
    // 在这里import引入,并将对应的组件添加到declarations数组中.
    AppComponent,   // AppComponent在app.component.ts中有被export出来
    DashboardComponent,
    HeroDetailComponent,   // HeroDetailComponent在hero-detail.component.ts中有被export出来
    HeroesComponent,
    HeroSearchComponent,

    HeroFormComponent,    // 模板驱动表单,使用HeroFormComponent

    // HeroFormReactive,      // 表单验证模块中响应式表单声明(declaration),由于heroForm,hero变量错误,所以隐藏

    ForbiddenValidatorDirective,      // 表单验证中的指令声明

    // 响应式表单声明
    HeroDetailFormComponent,
    HeroListComponent

  ],
  exports: [ // export for the DemoModule
    AppComponent,
    HeroDetailFormComponent,
    HeroListComponent
  ],
  // 在providers数组中注册全应用级的服务
  // 服务的创建者(加入到全局服务列表中
  providers: [
    HeroService,
    HerodataService
  ],
  bootstrap: [AppComponent]  // AppComponent在app.component.ts中有被export出来
})

export class AppModule { }
