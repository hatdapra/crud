import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BaseService } from '../../services/base.service';
import { ConfigService, Elements } from '../../services/config.service';

@Component({
  selector: 'app-elements-table',
  templateUrl: './elements-table.component.html',
  styleUrls: ['./elements-table.component.scss']
})
export class ElementsTableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Elements>();

  dataType: string = 'elements';
  cols  = this.config.cols[this.dataType];
  displayedCols: string[] = this.base.getDisplayedCols(this.cols);

  dataSubscription: Subscription = new Subscription;
  data: Element[] = [];

  constructor(
    private base: BaseService,
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.dataSubscription = this.base.getAll(this.dataType).subscribe(
      (data) => {
        this.dataSource.data = (data as unknown as Elements[]);
        console.log(this.dataSource.data);
        
      }
    )

  }

  ngAfterViewInit(): void{
    
  }

}
