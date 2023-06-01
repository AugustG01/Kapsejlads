package com.example.kapsejlads_frontend.controller;

import com.example.kapsejlads_frontend.model.Deltager;
import com.example.kapsejlads_frontend.model.Kapsejlads;
import com.example.kapsejlads_frontend.repository.DeltagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DeltagerRestController {

    @Autowired
    DeltagerRepository deltagerRepository;

    @GetMapping("/alleDeltagelser")
    public List<Deltager> deltagerList() {
        return deltagerRepository.findAll();
    }

    @PostMapping("/createDeltagelser")
    public ResponseEntity<Deltager> addDeltagerlser(@RequestBody Deltager deltager) {
        System.out.println(deltager);
        Deltager nyDeltagelse = deltagerRepository.save(deltager);
        return new ResponseEntity<>(nyDeltagelse, HttpStatus.CREATED);
    }
}
