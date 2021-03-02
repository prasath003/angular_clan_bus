import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertComponent} from '../alert/alert.component';
import {MatDialog} from '@angular/material';
import {CommunicationServiceService} from '../../service/communication_service/communication-service.service';

@Component({
  selector: 'app-project-registeration',
  templateUrl: './project-registeration.component.html',
  styleUrls: ['./project-registeration.component.scss']
})
export class ProjectRegisterationComponent implements OnInit {
  thirdFormGroup: FormGroup;
  loading: boolean = false;
  display: string;
  responseRegisteration: any;


  constructor(private route: Router, private dialog: MatDialog, private _service: CommunicationServiceService) {
    this.thirdFormGroup = new FormGroup({
      mobile: new FormControl('', [Validators.required, Validators.pattern('[0-9+]*'), Validators.minLength(10)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(15)]),
    });
  }

  ngOnInit() {
  }

  public hasError = (FormGroup: FormGroup, controlName: string, errorName: string) => {
    return FormGroup.controls[controlName].hasError(errorName);
  };
  async newRegistration() {
    if (this.thirdFormGroup.valid) {
      this.loading = true;
      const body = JSON.stringify({
        userName: this.thirdFormGroup.value.name,
        mobileNo: this.thirdFormGroup.value.mobile,
        bookId : [],
        bookName : []
      });
      this.responseRegisteration = await this._service.postObjects('users', body);

      if (!this.responseRegisteration) {
        this.loading = false;
        this.display = this.responseRegisteration.message;
      } else {
        if (this.responseRegisteration.statusCode === '404') {
          this.loading = false;
          this.display = this.responseRegisteration.message;
        } else {
          this.loading = false;
          const Rbody = JSON.stringify({
            userName: this.thirdFormGroup.value.name,
            mobileNo: this.thirdFormGroup.value.mobile,
            bookId : [],
            bookName : [],
            id: this.responseRegisteration.id
          });

          localStorage.setItem('details', Rbody);
          this.openAlert('Ok', this.responseRegisteration);
          this.route.navigateByUrl('/books');
        }

      }
    }
  }

  openAlert(message, details): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '350px',
      data: {message: message, details: details, component: 'Registration'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }

}
