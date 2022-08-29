package org.priyanand.parking.smartparking.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Time;

@Entity
public class Bookings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bookingId;
    private Integer slotNo;
    private String vehicleNo;
    private Integer bookedTo;

    public Bookings() {
    }

    public Bookings(long bookingId, int slotNo, String vehicleNo, Integer bookedTo) {
        this.bookingId = bookingId;
        this.slotNo = slotNo;
        this.vehicleNo = vehicleNo;
        this.bookedTo = bookedTo;
    }

    public long getBookingId() {
        return bookingId;
    }

    public void setBookingId(long bookingId) {
        this.bookingId = bookingId;
    }

    public int getSlotNo() {
        return slotNo;
    }

    public void setSlotNo(int slotNo) {
        this.slotNo = slotNo;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }

    public Integer getBookedTo() {
        return bookedTo;
    }

    public void setBookedTo(Integer bookedTo) {
        this.bookedTo = bookedTo;
    }

    @Override
    public String toString() {
        return "Bookings{" +
                "bookingId=" + bookingId +
                ", slotNo=" + slotNo +
                ", vehicleNo='" + vehicleNo + '\'' +
                ", bookedTo=" + bookedTo +
                '}';
    }
}
