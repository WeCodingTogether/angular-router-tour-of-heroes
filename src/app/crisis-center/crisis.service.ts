import { Injectable } from '@angular/core';
import { Crisis } from './crisis'
import { CRISES,} from './mock-crises'
import { Observable, of } from 'rxjs'
import { MessageService } from '../mesage.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the crisises
    this.messageService.add('CrisisService: fetched crisises');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrisises().pipe(
      // (+) before `id` turns the string into a number
      map((crisises: Crisis[]) => crisises.find(crisis => crisis.id === +id)!)
    );
  }
}
