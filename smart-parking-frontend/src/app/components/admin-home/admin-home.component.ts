import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private bookingService: BookingService, private _snackBar: MatSnackBar) { }

  list:any;

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(){
    this.bookingService.getAllBooking().subscribe((res: any)=>{
      this.list = res;
      console.log(this.list);
    }, (err: any)=>{
      console.log(err);
    })

  }

  toDelete(bookingId:any){
    this.bookingService.deleteBooking(bookingId).subscribe((res: any)=>{
        this.getAllBookings();
        window.location.reload();
    });
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

  logout(){
    localStorage.removeItem('adminToken');
    window.location.href = 'home-page';
  }

}
