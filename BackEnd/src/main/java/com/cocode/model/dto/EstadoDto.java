package com.cocode.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
@Builder
public class EstadoDto implements Serializable {

    private Long id;
    private String nombre;
}
