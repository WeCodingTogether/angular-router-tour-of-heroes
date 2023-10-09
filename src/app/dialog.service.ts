import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?')
    return of(confirmation);
  }
}
