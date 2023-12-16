package com.cocode.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;

import java.io.Serializable;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "usuarios")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 10, nullable = false)
    private String nombre;

    @Column(length = 25, nullable = false)
    private String apellido;

    @Email
    @Column(length = 25, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @OneToOne(targetEntity = Pais.class)
    @JoinColumn(name = "pais")
    private Pais pais;

    @Column(length = 250)
    private String descripcion;

    @Column(length = 30)
    private String rol;

    private String avatar;

    @Column(columnDefinition="int", nullable = false)
    private Integer puntos;

    @Column(columnDefinition="tinyint(1)", nullable = false)
    private Boolean activo;
}
