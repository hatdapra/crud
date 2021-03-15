import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Validators } from '@angular/forms';
import { Elements } from '../../services/config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedCols!: string[];
  @Input() cols!: any[];
  @Input() dataType!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSubscription: Subscription = new Subscription;
  myFormControls: any = {};
  mainData: any = {};
  
  constructor() { }

  submitForm(f: any): void{
    for (const key in this.mainData) {
      this.mainData[key] = this.myFormControls[key].value;
    }

    console.log(this.mainData);
            
  }

  ngOnInit(): void {
    for (let i = 0; i < this.cols.length; i++) {
      if(this.cols[i].inputType != 'id'){
        this.myFormControls[this.cols[i].fieldName] = new FormControl('', Validators.required);
        this.mainData[this.cols[i].fieldName] = '';
      }
    }
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    
  }

}
