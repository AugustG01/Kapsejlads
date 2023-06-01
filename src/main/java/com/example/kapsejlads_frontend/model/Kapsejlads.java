package com.example.kapsejlads_frontend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Kapsejlads {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int kapsejladsId;
    private String navn;

    @OneToMany(mappedBy = "kapsejlads")
    @JsonBackReference
    private Set<Deltager> deltagere = new HashSet<>();
}
