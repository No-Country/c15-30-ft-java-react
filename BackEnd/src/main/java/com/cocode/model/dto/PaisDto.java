package com.cocode.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
@Builder
public class PaisDto implements Serializable {

    private Long id;
    private String codigo;
    private String nombre;
}
