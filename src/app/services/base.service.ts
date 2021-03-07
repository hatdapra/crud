import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City, DataField, Elements } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl: string = "http://localhost:3000/";
  phpUrl: string = "http://dhsrv/tools/crud/tools.php";
  observables: any = {};

  constructor(private http: HttpClient) { }

  getDisplayedCols(fieldsArray: DataField[]): string[]{
    let fields: string[] = [];

    for (let i = 0; i < fieldsArray.length; i++) {
     fields.push(fieldsArray[i].fieldName);
      
    }

    return fields;
  }

  getAll(dataType: string): Observable<any[]>{
    let url = `${this.apiUrl}${dataType}`;
    let res: Observable<any> = new Observable;

    switch (dataType) {
      case 'elements':
        return this.http.post<Elements[]>(this.phpUrl, JSON.stringify({flag: dataType}));
        break;

      case 'city':
        return this.http.post<City[]>(this.phpUrl, JSON.stringify({flag: dataType}));
        
        break;
      
      default:
        break;
    }

       
    return res;
  }
}
