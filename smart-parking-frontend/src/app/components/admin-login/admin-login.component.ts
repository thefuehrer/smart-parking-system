import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(public dialogRef: MatDialogRef<AdminLoginComponent>, private _snackBar: MatSnackBar, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.validateEmail(this.credentials.username)) {
      let message = "Enter valid email address";
      this.credentials.username = '';
      this.credentials.password = '';
      this.showSnackBar(message);
    }
    else if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      this.loginService.doAdminLogin(this.credentials.username, this.credentials.password).subscribe((res: any) => {
        this.loggedIn(res.token);
        this.dialogRef.close();
        window.location.href = '/admin-home';
      }, (err: any) => {
        this.credentials.username = '';
        this.credentials.password = '';
        this.showSnackBar("Invalid credentials");
      });
    }
    else {
      let message = "All field are required";
      this.credentials.username = '';
      this.credentials.password = '';
      this.showSnackBar(message);
    }
  }

  validateEmail(username: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
      return (true)
    }
    return (false)
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

  onClose() {
    this.credentials.username = '';
    this.credentials.password = '';
    this.dialogRef.close();
  }

  loggedIn(token: any) {
    localStorage.setItem('adminToken', token);
  }
  
}
