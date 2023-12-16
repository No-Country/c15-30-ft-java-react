package com.cocode.model.dto;

import com.cocode.model.entity.Pais;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
@Builder
public class UsuarioDto implements Serializable {

    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private Pais pais;
    private String descripcion;
    private String rol;
    private String avatar;
    private Integer puntos;
    private Boolean activo;
}
