import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingService } from 'src/app/services/booking.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { RegisterComponentComponent } from '../register-component/register-component.component';
import { BookslotComponent } from '../bookslot/bookslot.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private slot1: any;
  private slot2: any;
  private slot3: any;

  constructor(private _snackBar: MatSnackBar, private bookingService: BookingService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getData1();
    this.getData2();
    this.getData3();
  }

  onClick(){
    if(localStorage.getItem('userToken') == null){
      this.showSnackBar("Please login to book slot");
    }  
  }

  onAdminClick(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(AdminLoginComponent,dialogConfig);
  }

  adminShow(){
    if(localStorage.getItem('userToken')!=null){
      return false;
    }
    return true;
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

  getData1(){
    this.bookingService.getField1().subscribe((res: any)=>{
      console.log("Value at slot one is ",res.feeds[1].field1);
      console.log(res);
      this.slot1 = res.feeds[1].field1;
    })
  }

  getData2(){
    this.bookingService.getField2().subscribe((res: any)=>{
      console.log("Value at slot two is ",res.feeds[1].field1);
      console.log(res);
      this.slot2 = res.feeds[1].field1;
    })
  }

  getData3(){
    this.bookingService.getField3().subscribe((res: any)=>{
      console.log("Value at slot three is ",res.feeds[1].field1);
      console.log(res);
      this.slot3 = res.feeds[1].field1;
    })
  }

  onClickReload(){
    window.location.reload();
  }

  isSlot1Available(){
    if(this.slot1 == 1){
      return true;
    }
    return false;
  }

  isSlot2Available(){
    if(this.slot2 == 1){
      return true;
    }
    return false;
  }

  isSlot3Available(){
    if(this.slot3 == 1){
      return true;
    }
    return false;
  }

  onBooking(slotNo:any){
    if(slotNo ==1){
      if(this.slot1 == 1){
        if(localStorage.getItem('userToken')!=null){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = "30%";
          this.dialog.open(BookslotComponent,dialogConfig);
        }
      }
      else{
        this.showSnackBar("slot is occupied");
      }
    }
    if(slotNo ==2){
      if(this.slot2 == 1){
        if(localStorage.getItem('userToken')!=null){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = "30%";
          this.dialog.open(BookslotComponent,dialogConfig);
        }
      }
      else{
        this.showSnackBar("slot is occupied");
      }
    }
    if(slotNo ==3){
      if(this.slot3 == 1){
        if(localStorage.getItem('userToken')!=null){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = "30%";
          this.dialog.open(BookslotComponent,dialogConfig);
        }
      }
      else{
        this.showSnackBar("slot is occupied");
      }
    } 
  }

}
