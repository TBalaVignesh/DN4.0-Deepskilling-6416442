package com.cognizant.springlearn;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @PostMapping("/authenticate")
    public AuthResponse authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            throw new RuntimeException("Missing or invalid Authorization header");
        }


        String base64Credentials = authHeader.substring("Basic ".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded);
        final String[] values = credentials.split(":", 2);

        String username = values[0];
        String password = values[1];


        if (!("user".equals(username) && "pwd".equals(password))) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtService.generateToken(username);
        return new AuthResponse(token);
    }
}
