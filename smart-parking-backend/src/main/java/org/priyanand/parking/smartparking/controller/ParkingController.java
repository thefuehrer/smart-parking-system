package org.priyanand.parking.smartparking.controller;

import org.priyanand.parking.smartparking.exception.UserNotFoundException;
import org.priyanand.parking.smartparking.jwtutility.JwtUtil;
import org.priyanand.parking.smartparking.model.*;
import org.priyanand.parking.smartparking.repository.AdminRepo;
import org.priyanand.parking.smartparking.repository.BookingsRepo;
import org.priyanand.parking.smartparking.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/smart-parking")
public class ParkingController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private BookingsRepo bookingsRepo;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> generateTokenForUser(@RequestBody JwtRequest jwtRequest) throws UserNotFoundException {
        User user = userRepo.findByUsername(jwtRequest.getUsername());
        if (user == null) {
            throw new UserNotFoundException("Invalid Username");
        } else if (!user.getPassword().equals(jwtRequest.getPassword())) {
            throw new UserNotFoundException("Invalid Credentials");
        } else {
            String token = jwtUtil.generateToken(user);
            return ResponseEntity.ok(new JwtResponse(user.getUsername(), token));
        }
    }

    @PostMapping("/admin/login")
    public ResponseEntity<?> generateTokenForAdmin(@RequestBody JwtRequest jwtRequest) throws UserNotFoundException {
        Admin admin = adminRepo.findByUsername(jwtRequest.getUsername());
        if (admin == null) {
            throw new UserNotFoundException("Invalid Username");
        } else if (!admin.getPassword().equals(jwtRequest.getPassword())) {
            throw new UserNotFoundException("Invalid Credentials");
        } else {
            String token = jwtUtil.generateToken(admin);
            return ResponseEntity.ok(new JwtResponse(admin.getUsername(), token));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println(user.toString());
        userRepo.save(user);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{username}").buildAndExpand(user.getUsername())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/book")
    public ResponseEntity<?> bookSlot(@RequestBody Bookings bookings){
        System.out.println(bookings.toString());
        Bookings savedBookings = bookingsRepo.save(bookings);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{bookingId}").buildAndExpand(savedBookings.getBookingId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/bookings")
    public ResponseEntity<?> getAllBookings(){
        List<Bookings> bookings = bookingsRepo.findAll();
        System.out.println(bookings);
        return ResponseEntity.ok(bookings);
    }

    @DeleteMapping("/delete/{bookingId}")
    public ResponseEntity<?> deleteBookings(@PathVariable Long bookingId){
        bookingsRepo.deleteById(bookingId);
        String message = new String();
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{bookingId}").buildAndExpand(bookingId)
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
