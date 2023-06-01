package com.example.kapsejlads_frontend.service;

import com.example.kapsejlads_frontend.model.Båd;
import com.example.kapsejlads_frontend.model.Deltager;
import com.example.kapsejlads_frontend.model.Kapsejlads;
import com.example.kapsejlads_frontend.repository.BådRepository;
import com.example.kapsejlads_frontend.repository.DeltagerRepository;
import com.example.kapsejlads_frontend.repository.KapsejladsRepository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {


    @Autowired
    BådRepository bådRepository;

    @Autowired
    KapsejladsRepository kapsejladsRepository;

    @Autowired
    DeltagerRepository deltagerRepository;
    public Båd updateBåd(Integer id, Båd båd) {
        if (bådRepository.findById(id).isEmpty()) {
            return null;
        }
        return bådRepository.save(båd);
    }

    public Kapsejlads updateKapsejlads(Integer id, Kapsejlads kapsejlads) {
        if (kapsejladsRepository.findById(id).isEmpty()) {
            return null;
        }
        return kapsejladsRepository.save(kapsejlads);
    }

    public Deltager updateDeltagelse(Integer id, Deltager deltager) {
        if (deltagerRepository.findById(id).isEmpty()) {
            return null;
        }
        return deltagerRepository.save(deltager);
    }

}
