import { TesteModel } from './../models/teste.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getFuncionarios() {
    return [
      {id: 1, name: 'Alexandre', age: 27},
      {id: 2, name: 'Ágda', age: 35},
      {id: 3, name: 'Heitor', age: 1}
    ];
  }

  public getFuncionariosWS(): Observable<TesteModel[]> {
    return this.http.get<TesteModel[]>(this.url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
