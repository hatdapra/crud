import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { EditDialogComponent } from '../parts/edit-dialog/edit-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(
    private editDialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  openEditDialog(data: any): Observable<any>{
    const editDialogRef = this.editDialog.open(EditDialogComponent, {
      width: '250px',
      data
    });

    return editDialogRef.afterClosed();
  }

  openSnackBar(duration: number, message?: string): void{
    this.snackBar.open((message as string), 'Ok', {duration}); 
  }
}
