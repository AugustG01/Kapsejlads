package com.example.kapsejlads_frontend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Deltager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int deltagerId;

    @ManyToOne
    @JoinColumn(name = "bådid", referencedColumnName = "bådId")
    private Båd båd;

    @ManyToOne
    @JoinColumn(name = "kapsejlId", referencedColumnName = "kapsejladsId")
    private Kapsejlads kapsejlads;
    private int point;

}
