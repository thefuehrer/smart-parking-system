import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegisterComponentComponent } from '../register-component/register-component.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onClickForLogin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(LoginComponentComponent,dialogConfig);
  }

  onClickForRegister(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(RegisterComponentComponent,dialogConfig);
  }

  isLoggedIn(){
    if(localStorage.getItem('userToken') == null){
      return false;
    }
    return true;
  }

  logOut(){
    localStorage.removeItem('userToken');
  }

}
