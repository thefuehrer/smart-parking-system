package org.priyanand.parking.smartparking.repository;

import org.priyanand.parking.smartparking.model.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepo extends JpaRepository<Bookings, Long> {
}
