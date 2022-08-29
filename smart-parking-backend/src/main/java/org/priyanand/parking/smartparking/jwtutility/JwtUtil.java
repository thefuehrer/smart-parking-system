package org.priyanand.parking.smartparking.jwtutility;

import io.jsonwebtoken.SignatureAlgorithm;
import org.priyanand.parking.smartparking.model.Admin;
import org.priyanand.parking.smartparking.model.User;

import java.util.Date;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    private String SECRET_KEY = "secret";

    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, user.getUsername());
    }

    public String generateToken(Admin admin){
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, admin.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }
}
