import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditDialogComponent } from '../parts/edit-dialog/edit-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(
    private editDialog: MatDialog
  ) { }

  openEditDialog(data: any): Observable<any>{
    const editDialogRef = this.editDialog.open(EditDialogComponent, {
      width: '250px',
      data
    });

    return editDialogRef.afterClosed();
  }
}
