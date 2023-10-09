import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crises-center.module';
import { CommonModule } from '@angular/common';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,  // 动画
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,  // last, after HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
