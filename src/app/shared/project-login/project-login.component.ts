import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommunicationServiceService} from '../../service/communication_service/communication-service.service';
import {Router} from '@angular/router';
import {AlertComponent} from '../alert/alert.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-project-login',
  templateUrl: './project-login.component.html',
  styleUrls: ['./project-login.component.scss']
})
export class ProjectLoginComponent implements OnInit {
  loginForm: FormGroup;
  formValid: any;
  loading: any;
  display: string;
  responseLogin: any;

  constructor(private service: CommunicationServiceService, private dialog: MatDialog, private route: Router) {
    this.loginForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit() {

  }

  public hasLoginError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };
  public login = (loginForm) => {
    if (this.loginForm.valid) {
      // console.log(loginForm);
      this.loading = true;
      setTimeout(() => {
        this.loginConfirm();
      }, 2000);
    }
  }
  async loginConfirm() {
    // @ts-ignore
    // Login Response
    const body = JSON.stringify({
      userName: this.loginForm.value.userId,
      mobile: this.loginForm.value.password
    });

    this.responseLogin = await this.service.getObjects('users', '?userName=' + this.loginForm.value.userId);
    console.log(this.responseLogin);
    if (!this.responseLogin) {
      this.loading = false;
      // Failure response show the user
      this.display = 'Invalid user';
    } else {
      localStorage.setItem('details', JSON.stringify(this.responseLogin[0]));
      this.loading = false;
      this.route.navigateByUrl('/main');
    }
  }
  openAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });
  }


}
