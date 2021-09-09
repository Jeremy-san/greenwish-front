import { Injectable } from '@angular/core';
import { Sheet } from './../model/sheet';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

   // le point d’accés à notre API
   private sheetUrl = 'api/sheet';

   constructor(private http: HttpClient) {}

   private log(log: string) {
    console.info(log); // methode qui permet de centraliser tous les log
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

    /* GET sheet search */
    searchSheet(term: string): Observable<Sheet[]> {
      if (!term.trim()) {
        // si le terme de recherche n'existe pas, on renvoie un tableau vide.
        return of([]);
      }

      return this.http.get<Sheet[]>(`api/sheet/?name=${term}`).pipe(
        tap(_ => this.log(`found sheet matching "${term}"`)),
        catchError(this.handleError<Sheet[]>('searchSheet', []))
      );
    }
     // Retourne tous le tableau
  getSheets(): Observable<Sheet[]> {
    return this.http.get<Sheet[]>(this.sheetUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getSheets`, []))
    );
  }

  getSheet(id: number): Observable<Sheet> {
    const url = `${this.sheetUrl}/${id}`;

    return this.http.get<Sheet>(url).pipe(
      tap(_ => this.log(`fetched sheet id=${id}`)),
      catchError(this.handleError<Sheet>(`getSheet id=${id}`))
  );
  }
}
