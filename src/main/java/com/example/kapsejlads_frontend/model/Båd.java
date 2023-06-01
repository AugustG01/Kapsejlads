package com.example.kapsejlads_frontend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Båd {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bådId;

    @Enumerated(EnumType.STRING)
    private BådStørrelse bådStørrelse;
    private int totalPoint;



    @OneToMany(mappedBy = "båd")
    @JsonBackReference
    private Set<Deltager> deltagere = new HashSet<>();
}
