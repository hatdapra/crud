import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City, DataField, Elements } from './config.service';
import { DialogsService } from './dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl: string = "http://localhost:3000/";
  phpUrl: string = "http://dhsrv/tools/crud/tools.php";
  observables: any = {};

  constructor(private http: HttpClient, private dialog: DialogsService) { }

  getDisplayedCols(fieldsArray: DataField[]): string[] {
    let fields: string[] = [];

    for (let i = 0; i < fieldsArray.length; i++) {
      fields.push(fieldsArray[i].fieldName);
    }

    return fields;
  }

  getIDField(fieldsArray: any[]): string{
    let field: string = "";
    for (let i = 0; i < fieldsArray.length; i++) {
      if(fieldsArray[i].inputType == 'id'){
        field = fieldsArray[i].fieldName;
      }      
    }

    return field;
  }

  getAll(dataType: string): Observable<any> {
    let url = `${this.apiUrl}${dataType}`;
    let res: Observable<any> = new Observable;

    if (!this.observables[dataType]) {
      this.observables[dataType] = new Subject;
    }

    switch (dataType) {
      case 'elements':
        this.http.post<Elements[]>(this.phpUrl, JSON.stringify({ flag: dataType }))
          .forEach(
            data => this.observables[dataType].next(data)
          );

        break;
      case 'city':
        this.http.post<City[]>(this.phpUrl, JSON.stringify({ flag: dataType }))
          .forEach(
            data => this.observables[dataType].next(data)
          );

        break;
      default:
        break;
    }
    return this.observables[dataType];
  }

  insertNewRecord(dataType: string, data: Element | City): void {
    this.http.post(this.phpUrl, JSON.stringify({ flag: `${dataType}_insert`, data: data }))
      .toPromise().then(
        resp => this.getAll(dataType),
        err => console.error(err)
      );
  }

  updateRecord(dataType: string, data: Element | City): void {
    this.http.post(this.phpUrl, JSON.stringify({ flag: `${dataType}_update`, data: data }))
      .toPromise().then(
        resp => {
          this.dialog.openSnackBar(3000, "A váltotatások elmentése sikerült.");
          this.getAll(dataType)
        },
        err => console.error(err)
      );
  }

  deleteRecord(id: any): void{
    this.dialog.openSnackBar(3000, `A törlés sikerült. (${id})`);  
  }
}
