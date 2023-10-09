import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router'
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'angular-router-tour-of-heroes';

  constructor(private contexts: ChildrenOutletContexts) { }


  getAnimationData() {
    // 使用heroRouting： { path: 'heroes', component: HeroListComponent, data: {animation: 'heroes'}}
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
