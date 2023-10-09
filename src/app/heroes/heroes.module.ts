import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroListComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    // HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false}
    // ),
  ]
})
export class HeroesModule { }