package com.example.kapsejlads_frontend.controller;

import com.example.kapsejlads_frontend.model.Deltager;
import com.example.kapsejlads_frontend.model.Kapsejlads;
import com.example.kapsejlads_frontend.repository.BådRepository;
import com.example.kapsejlads_frontend.repository.DeltagerRepository;
import com.example.kapsejlads_frontend.repository.KapsejladsRepository;
import com.example.kapsejlads_frontend.service.Service;
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

    @Autowired
    BådRepository bådRepository;

    @Autowired
    KapsejladsRepository kapsejladsRepository;

    @Autowired
    Service deltagerService;

    @GetMapping("/alleDeltagelser")
    public List<Deltager> deltagerList() {
        return deltagerRepository.findAll();
    }

    @PostMapping("/createDeltagelser/{kapsejladsId}/{bådId}")
    public void addDeltagelser(@RequestBody Deltager deltager, @PathVariable int kapsejladsId, @PathVariable int bådId){

        deltager.setBåd(bådRepository.findById(bådId).get());
        deltager.setKapsejlads(kapsejladsRepository.findById(kapsejladsId).get());
        System.out.println(deltager);
        deltagerRepository.save(deltager);
    }

    @DeleteMapping("/deltagelse/{id}")
    public ResponseEntity<Deltager> deleteProduct(@PathVariable("id") Integer id) {
        deltagerRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/deltagelser/{id}")
    public ResponseEntity<Deltager> updateDeltagelse(@PathVariable Integer id, @RequestBody Deltager deltager) {
        return new ResponseEntity<>(deltagerService.updateDeltagelse(id, deltager), HttpStatus.OK);
    }

}
