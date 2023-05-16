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

  getEquipment(type: string): Observable<IEquipment[]> {
    const requestOptions = { params: new HttpParams().set('type', type) };
 
    return this.httpClient.get<IEquipment[]>("http://localhost:7000/equipment/get", requestOptions)
      .pipe(
        catchError(this.handleError<IEquipment[]>([]))
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
  
      //Empty result return lets the app keep running
      return of(result as T);
    };
  }
}