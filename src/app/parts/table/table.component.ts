import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedCols!: string[];
  @Input() cols!: any[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSubscription: Subscription = new Subscription;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    
  }

}
