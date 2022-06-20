import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor( ) { }  

  getConstData(){
    // return this.httpClient.get('http://cronyapps.de:49168/dk-auto',this.httpOptions);
    return data;
  }
}
