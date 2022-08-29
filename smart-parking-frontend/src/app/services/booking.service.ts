import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  baseUrl1 = "https://api.thingspeak.com/channels/1750296/fields/1.json?api_key=W9JDRQN14EZ0OWRG&results=2";
  baseUrl2 = "https://api.thingspeak.com/channels/1750293/fields/1.json?api_key=QCJY77BIHKHYOL4G&results=2";
  baseUrl3 = "https://api.thingspeak.com/channels/1727592/fields/1.json?api_key=APM8AD4PLFDCB0SU&results=2";

  Url = 'http://localhost:3999/api/smart-parking/';

  getField1(){
    return this.http.get(this.baseUrl1);
  }

  getField2(){
    return this.http.get(this.baseUrl2);
  }

  getField3(){
    return this.http.get(this.baseUrl3);
  }


  bookSlot(bookings:any){
    let url = this.Url + 'book';
    return this.http.post(url, bookings);
  }
  getAllBooking(){
    let url = this.Url + 'bookings';
    return this.http.get(url);
  }
  deleteBooking(bookingId:any){
    let url = this.Url +'delete/'+bookingId;
    return this.http.delete(url);
  }
}
