package com.cocode.service;

import com.cocode.model.entity.Estado;

import java.util.List;

public interface IEstadoService {

    List<Estado> listAll();

    Estado findById(Long id);
}
