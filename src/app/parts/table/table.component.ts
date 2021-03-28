import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Validators } from '@angular/forms';
import { Elements } from '../../services/config.service';
import { BaseService } from '../../services/base.service';
import { DialogsService } from '../../services/dialogs.service';
import { iDialogData } from '../edit-dialog/edit-dialog.component';
import { take } from 'rxjs/operators';

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
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any> | undefined;

  dataSubscription: Subscription = new Subscription;
  addForm: FormGroup = new FormGroup({});
  editForm: FormGroup = new FormGroup({});
  mainData: any = {};

  constructor(private base: BaseService, private dialogService: DialogsService) { }

  submitForm(): void {
    for (const key in this.mainData) {
      this.mainData[key] = this.addForm.get(key)?.value;
    }

    if (this.addForm.valid) {
      this.addForm.reset();
    }

    console.log(this.mainData);
    this.base.insertNewRecord(this.dataType, this.mainData);

  }

  ngOnInit(): void {
    for (let i = 0; i < this.cols.length; i++) {
      if (this.cols[i].inputType != 'id') {
        this.addForm.addControl(this.cols[i].fieldName, new FormControl('', Validators.required));
        this.mainData[this.cols[i].fieldName] = '';
      }
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

  }

  onDelete(row: any): void{
    let content: any = {};
    
    this.editForm = new FormGroup({});

    /* for (const key in row) {
      content.push({fieldName: key, value: row[key]});
      
    } */

    for (let i = 0; i < this.cols.length; i++) {
      if(row[this.cols[i].fieldName]){
        content[this.cols[i].fieldName] = row[this.cols[i].fieldName];

        this.editForm.addControl(this.cols[i].fieldName, new FormControl(row[this.cols[i].fieldName], Validators.required));
      }
      
    }
    console.log('row: ', row);    
    
    const dialogData: iDialogData = {
      cols: this.cols,
      title: 'Are you sure?',
      content: content ,
      template: this.dialogTemplate
    }

    this.dialogService.openEditDialog(dialogData).pipe(
      take(1)
    ).subscribe(
      res=>{
        for (const key in content) {
          content[key] = this.editForm.get(key)?.value;
        }
        console.log('mainData:',content);
        
      }
    );
    
  }

}
