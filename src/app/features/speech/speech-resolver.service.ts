import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SpeechService } from 'src/app/core/services/speech.service';
import { SpeechResolved } from 'src/app/shared/models/speech';


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<SpeechResolved> {

  constructor(private speechService: SpeechService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<SpeechResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({ speech: null, error: message });
    }

    return this.speechService.getSpeech(+id)
      .pipe(
        map(speech => ({ speech })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ speech: null, error: message });
        })
      );
  }

}