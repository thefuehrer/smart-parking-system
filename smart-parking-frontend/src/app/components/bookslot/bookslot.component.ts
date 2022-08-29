import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {

  bookings = {
    bookedTo:'',
    slotNo:'',
    vehicleNo:''
  }

  constructor(public dialogRef: MatDialogRef<BookslotComponent>, private _snackBar: MatSnackBar, public bookingService:BookingService) { }

  ngOnInit(): void {
  }

  onClose(){
    this.bookings.bookedTo = '',
    this.bookings.vehicleNo = '',
    this.bookings.slotNo = ''
    this.dialogRef.close();
  }

  onSubmit(){
    if((this.bookings.bookedTo!=''&&this.bookings.vehicleNo!=''&&this.bookings.slotNo!='')&&(this.bookings.bookedTo!=null&&this.bookings.vehicleNo!=null&&this.bookings.slotNo!=null)){
        this.bookingService.bookSlot(this.bookings).subscribe((res: any)=>{
          this.showSnackBar("Slot booked successfully");
          this.dialogRef.close();
        },(err: any)=>{
          console.log(err);
          this.bookings.bookedTo = '';
          this.bookings.vehicleNo = '';
          this.bookings.slotNo = '';
          this.dialogRef.close();
        });
    }else{
      this.bookings.bookedTo ='';
      this.bookings.vehicleNo = '';
      this.bookings.slotNo= '';
      this.showSnackBar("All filds are required");
    }
  }

  showSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

}
