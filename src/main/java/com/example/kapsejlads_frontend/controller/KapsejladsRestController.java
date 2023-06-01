package com.example.kapsejlads_frontend.controller;

import com.example.kapsejlads_frontend.model.Båd;
import com.example.kapsejlads_frontend.model.Kapsejlads;
import com.example.kapsejlads_frontend.repository.KapsejladsRepository;
import com.example.kapsejlads_frontend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class KapsejladsRestController {

    @Autowired
    KapsejladsRepository kapsejladsRepository;

    @Autowired
    Service kapsejladsService;

    @GetMapping("/alleKapsejlads")
    public List<Kapsejlads> hentKapsejlads() {
        return kapsejladsRepository.findAll();
    }

    @PutMapping("/kapsejlads/{id}")
    public ResponseEntity<Kapsejlads> updateKapsejlads(@PathVariable Integer id, @RequestBody Kapsejlads kapsejlads) {
        return new ResponseEntity<>(kapsejladsService.updateKapsejlads(id, kapsejlads), HttpStatus.OK);
    }

    @PostMapping("/createKapsejlads")
    public ResponseEntity<Kapsejlads> addKapsejlads(@RequestBody Kapsejlads kapsejlads) {
        System.out.println(kapsejlads);
        Kapsejlads nytKapsejlads = kapsejladsRepository.save(kapsejlads);
        return new ResponseEntity<>(nytKapsejlads, HttpStatus.CREATED);
    }

    @DeleteMapping("/kapsejlads/{id}")
    public ResponseEntity<Kapsejlads> deleteProduct(@PathVariable("id") Integer id) {
        kapsejladsRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
