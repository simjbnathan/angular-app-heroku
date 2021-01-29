import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Speech } from 'src/app/shared/models/speech';


@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  private speechUrl = 'api/speech';

  constructor(private http: HttpClient) { }

  getSpeeches(): Observable<Speech[]> {
    return this.http.get<Speech[]>(this.speechUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getSpeech(id: number): Observable<Speech> {
    if (id === 0) {
      return of(this.initializeSpeech());
    }
    const url = `${this.speechUrl}/${id}`;
    return this.http.get<Speech>(url)
      .pipe(
        tap(data => console.log('getSpeech: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createSpeech(speech: Speech): Observable<Speech> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    speech.id = null;
    return this.http.post<Speech>(this.speechUrl, speech, { headers })
      .pipe(
        tap(data => console.log('createSpeech: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteSpeech(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.speechUrl}/${id}`;
    return this.http.delete<Speech>(url, { headers })
      .pipe(
        tap(data => console.log('deleteSpeech: ' + id)),
        catchError(this.handleError)
      );
  }

  updateSpeech(speech: Speech): Observable<Speech> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.speechUrl}/${speech.id}`;
    return this.http.put<Speech>(url, speech, { headers })
      .pipe(
        tap(() => console.log('updateSpeech: ' + speech.id)),
        // Return the speech on an update
        map(() => speech),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeSpeech(): Speech {
    // Return an initialized object
    return {
      id: 0,
      speechName: null,
      speechContent: null,
      author: null,
      tags: [],
      speechDate: null,
    };
  }
}