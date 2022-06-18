import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor( private httpClient: HttpClient) { }
  
  url ="https://listing-creation.api.autoscout24.com/makes?makeId=13&culture=de-DE";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text' 
    }),
  };

  getCarMarks(markNumber:number): Observable<any> {
    return this.httpClient.get(`https://listing-creation.api.autoscout24.com/makes?makeId=${markNumber}&culture=de-DE`, this.httpOptions);
  }

  getConstData(): Observable<any>{
    return this.httpClient.get('http://cronyapps.de:49168/dk-auto',this.httpOptions);
  }
}
