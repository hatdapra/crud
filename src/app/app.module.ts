import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material moduls
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { ElementsTableComponent } from './parts/elements-table/elements-table.component';
import { TableComponent } from './parts/table/table.component';
import { MatTableComponent } from './temp/mat-table/mat-table.component';
import { CityTableComponent } from './parts/city-table/city-table.component';

import { getHunPaginatorIntl } from './hun-paginator-intl';
import { MainFormComponent } from './temp/main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsTableComponent,
    TableComponent,
    MatTableComponent,
    CityTableComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getHunPaginatorIntl() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
