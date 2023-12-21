package com.cocode.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "proyectos")
public class Proyecto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String nombre;

    @Column(length = 250)
    private String descripcion;

    private String portada;

    @OneToOne(targetEntity = Dificultad.class)
    @JoinColumn(name = "dificultad")
    private Dificultad dificultad;

    @Column(columnDefinition = "tinyint(1)", nullable = false)
    private Boolean activo;
}
