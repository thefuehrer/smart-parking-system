package org.priyanand.parking.smartparking.repository;

import org.priyanand.parking.smartparking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {
    User findByUsername(String username);
}
