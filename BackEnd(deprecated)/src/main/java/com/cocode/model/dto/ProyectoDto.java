package com.cocode.model.dto;

import com.cocode.model.entity.Dificultad;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
@Builder
public class ProyectoDto implements Serializable {

    private Long id;
    private String nombre;
    private String descripcion;
    private String portada;
    private Dificultad dificultad;
    private Boolean activo;

}
