package com.example.kapsejlads_frontend.controller;

import com.example.kapsejlads_frontend.model.Båd;
import com.example.kapsejlads_frontend.repository.BådRepository;
import com.example.kapsejlads_frontend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BådRestController {

    @Autowired
    BådRepository bådRepository;

    @Autowired
    Service bådService;

    //virker
    @GetMapping("/allBoats")
    public List<Båd> hentBåde() {
        return bådRepository.findAll();
    }
    //virker
    @PutMapping("/boats/{id}")
    public ResponseEntity<Båd> updateBåd(@PathVariable Integer id, @RequestBody Båd båd) {
        return new ResponseEntity<>(bådService.updateBåd(id, båd), HttpStatus.OK);
    }
    //virker
    @PostMapping("/createBoat")
    public ResponseEntity<Båd> addBåd(@RequestBody Båd båd) {
        System.out.println(båd);
        Båd nyBåd = bådRepository.save(båd);
        return new ResponseEntity<>(nyBåd, HttpStatus.CREATED);
    }
    //virker
    @DeleteMapping("/boat/{id}")
    public ResponseEntity<Båd> deleteProduct(@PathVariable("id") Integer id) {
        bådRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
