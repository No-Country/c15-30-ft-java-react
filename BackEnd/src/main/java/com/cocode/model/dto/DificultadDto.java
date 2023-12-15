package com.cocode.model.dto;

import lombok.*;

import java.io.Serializable;

@Data
@ToString
@Builder
public class DificultadDto implements Serializable {

    private Long id;
    private String nombre;
}
