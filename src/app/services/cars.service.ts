import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor( private httpClient: HttpClient) { }  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'text' 
    }),
  };  

  getConstData(){
    //return this.httpClient.get('http://localhost:3000/dk-auto',this.httpOptions);
    return this.httpClient.get('http://cronyapps.de:49168/dk-auto',this.httpOptions);
    // return data;
  }
}
