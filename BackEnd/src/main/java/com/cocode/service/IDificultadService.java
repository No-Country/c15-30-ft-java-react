package com.cocode.service;

import com.cocode.model.entity.Dificultad;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IDificultadService {

    List<Dificultad> listAll();

    Dificultad findById(Long Id);
}
