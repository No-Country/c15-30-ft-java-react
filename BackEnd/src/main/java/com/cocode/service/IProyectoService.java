package com.cocode.service;

import com.cocode.model.dto.ProyectoDto;
import com.cocode.model.entity.Proyecto;

import java.util.List;

public interface IProyectoService {

    List<Proyecto> listAll();
    Proyecto save(ProyectoDto proyectoDto);
    Proyecto findById(Long id);
    void delete(Proyecto proyecto);

    boolean existById(Long id);
}
