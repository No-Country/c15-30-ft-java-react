package com.cocode.service;

import com.cocode.model.entity.Pais;

import java.util.List;

public interface IPaisService {

    List<Pais> listAll();

    Pais findById(Long id);
}
