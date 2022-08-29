package org.priyanand.parking.smartparking.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private String username;
    private String firstName;
    private String LastName;
    private String vehicleNo;
    private String password;

    public User() {
    }

    public User(String userId, String firstName, String lastName, String vehicleNo, String password) {
        this.username = userId;
        this.firstName = firstName;
        LastName = lastName;
        this.vehicleNo = vehicleNo;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String userId) {
        this.username = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getVehicleNo() {
        return vehicleNo;
    }

    public void setVehicleNo(String vehicleNo) {
        this.vehicleNo = vehicleNo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", firstName='" + firstName + '\'' +
                ", LastName='" + LastName + '\'' +
                ", vehicleNo='" + vehicleNo + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
