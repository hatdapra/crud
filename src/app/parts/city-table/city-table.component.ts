import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { City, ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.scss']
})
export class CityTableComponent implements OnInit {
  dataSource = new MatTableDataSource<City>();

  dataType: string = 'city';
  cols  = this.config.cols[this.dataType];
  displayedCols: string[] = this.base.getDisplayedCols(this.cols);

  dataSubscription: Subscription = new Subscription;
  data: City[] = [];

  constructor(
    private base: BaseService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.dataSubscription = this.base.getAll(this.dataType).subscribe(
      (data) => {
        this.dataSource.data = (data as unknown as City[]);
        console.log(this.dataSource.data);
        
      }
    )

  }
}
