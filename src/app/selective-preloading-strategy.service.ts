import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  preloadingModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.canMatch === undefined && route.data?.['preload'] && route.path != null) {
      this.preloadingModules.push(route.path);
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }
}
