package com.multiapp.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiControllers {

    @GetMapping("/resources")
    public ResponseEntity<Object> getSampleResource() {
        return ResponseEntity.ok(Map.of("name", "Test User"));
    }

    @PostMapping("/resources")
    public ResponseEntity<Object> postSampleResource(@RequestBody Map<String, Object> request) {
        return ResponseEntity.ok(request);
    }
}
