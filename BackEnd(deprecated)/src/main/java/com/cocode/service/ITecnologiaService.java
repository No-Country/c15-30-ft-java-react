package com.cocode.service;

import com.cocode.model.entity.Tecnologia;

import java.util.List;

public interface ITecnologiaService {

    List<Tecnologia> listAll();

    Tecnologia findById(Long id);
}
