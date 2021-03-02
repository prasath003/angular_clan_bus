import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  dataToShow: any;
  constructor(@Inject(MAT_DIALOG_DATA) public message: any, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<AlertComponent>) {
  }
  ngOnInit() {
    if (this.message.component === 'Registration') {
      this.dataToShow = this.message.details;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
