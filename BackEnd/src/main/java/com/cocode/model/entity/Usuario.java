package com.cocode.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "apellido")
    private String apellido;
    @Column(name = "username")
    private String username;
    @Column(name = "mail")
    private String mail;
    @Column(name = "contraseña")
    private String contrasena;
    @Column(name = "activo")
    private boolean activo;
    /*
    * -- Pais
    * proyectos
    * proyectos_favoritos
    * stack_usuario
    * */

}
