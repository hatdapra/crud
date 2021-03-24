import { Injectable } from '@angular/core';

export interface Elements{
  position?: number;
  name: string;
  weight: number;
  symbol: string;
}

export interface City{
  id?: number;
  name: string;
  countrycode: string;
  district: string;
  population: number;
}

export interface DataField{
  fieldName: string;
  displayName: string;
  inputType?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols: any = {
    elements: [
      {fieldName: 'position', displayName: 'Rsz.', inputType: "id", showInput: false, inputStyle: "width: 25%;"},
      {fieldName: 'name', displayName: 'Név', inputType: "text", style: "width: auto;", showInput: true, inputStyle: "width: 25%;"},
      {fieldName: 'weight', displayName: 'Súly', inputType: "number", style: "width: auto;", showInput: true, inputStyle: "width: 25%;"},
      {fieldName: 'symbol', displayName: 'Vegyjel', inputType: "text", style: "width: auto;", showInput: true, inputStyle: "width: 25%;"},
      {fieldName: "actions", displayName: "Actions", style: "width: 29%;", showInput: false, inputStyle: "width: 25%;"}
    ],
    city: [
      {fieldName: "ID", displayName: "#", inputType: "id", showInput: false, inputStyle: "width: 19%;"},
      {fieldName: "Name", displayName: "Név", inputType: "text", style: "width: auto;", showInput: true, inputStyle: "width: 19%;"},
      {fieldName: "CountryCode", displayName: "Ország", inputType: "text", style: "width: auto;", showInput: true, inputStyle: "width: 19%;"},
      {fieldName: "District", displayName: "Körzet", inputType: "text", style: "width: auto;", showInput: true, inputStyle: "width: 19%;"},
      {fieldName: "Population", displayName: "Népesség", inputType: "text", style: "width: auto;", showInput: true, inputStyle: "width: 19%;"},
      {fieldName: "actions", displayName: "Actions", style: "width: 29%;", showInput: false, inputStyle: "width: 19%;"}
    ]
  };

  constructor() { }
}
