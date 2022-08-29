package org.priyanand.parking.smartparking.repository;

import org.priyanand.parking.smartparking.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String> {
    Admin findByUsername(String username);
}
