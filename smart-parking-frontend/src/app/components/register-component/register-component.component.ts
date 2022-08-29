import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  regisUser = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    vehicleNo: '',
  }

  user = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    vehicleNo: '',
  }


  constructor(private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<RegisterComponentComponent>, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (!this.validateEmail(this.regisUser.username)) {
      let message = "Please enter valid email address";
      this.showSnackBar(message);
      this.reset();
    }
    else if (!this.validateAllFields()) {
      let message = "All fields are required";
      this.showSnackBar(message);
      this.reset();
    }
    else {
      this.user.firstName = this.regisUser.firstName;
      this.user.lastName = this.regisUser.lastName;
      this.user.username = this.regisUser.username;
      this.user.password = this.regisUser.password;
      this.user.vehicleNo = this.regisUser.vehicleNo;
      console.log(this.user);
      this.loginService.doRegister(this.user).subscribe((res: any)=>{
      });
      this.dialogRef.close();
    }
  }

  reset() {
    this.regisUser.username = '';
    this.regisUser.firstName = '';
    this.regisUser.lastName = '';
    this.regisUser.password = '';
    this.regisUser.vehicleNo = '';
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

  validateAllFields() {

    let result = true;
    if (this.regisUser.username === '')
      result = false;
    if (this.regisUser.firstName === '')
      result = false;
    if (this.regisUser.lastName === '')
      result = false;
    if (this.regisUser.password === '')
      result = false;
    if (this.regisUser.vehicleNo === '')
      result = false;

    return result;
  }

  validateEmail(username: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
      return (true)
    }
    return (false)
  }

  onClose() {
    this.reset();
    this.dialogRef.close();
  }

}
