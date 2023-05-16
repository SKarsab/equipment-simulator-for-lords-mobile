// PURPOSE : HttpClient service for fetching equipment data from the backend for the application. This 
//           separates the logic from the components using this service, and can be removed if not needed
//           at a later time

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { catchError, map, tap } from 'rxjs/operators';
import { IEquipment } from 'src/interfaces/equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private httpClient: HttpClient) { }

  // DESCRIPTION :
  //  Fetches equipment of type and returns an observable of type IEquipment array
  // PARAMETERS  :
  //  type - the selected equipment slot/type (E.g. "Helmet", "Chest")
  getEquipment(type: string): Observable<IEquipment[]> {
    const requestOptions = { params: new HttpParams().set('type', type) };
 
    return this.httpClient.get<IEquipment[]>("http://localhost:7000/equipment/get", requestOptions)
      .pipe(
        catchError(this.handleError<IEquipment[]>([]))
      );
  }

  // DESCRIPTION :
  //  prints the error out to the console if the fetch fails, but allows the application to continue
  // PARAMETERS  :
  //  result - 
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
  
      //Empty result return lets the app keep running
      return of(result as T);
    };
  }
}