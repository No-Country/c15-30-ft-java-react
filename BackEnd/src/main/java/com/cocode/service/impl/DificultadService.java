package com.cocode.service.impl;

import com.cocode.model.dao.DificultadDao;
import com.cocode.model.entity.Dificultad;
import com.cocode.service.IDificultadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DificultadService implements IDificultadService {

    @Autowired
    private DificultadDao dificultadDao;

    @Transactional(readOnly = true)
    @Override
    public List<Dificultad> listAll() {
        return (List<Dificultad>) dificultadDao.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Dificultad findById(Long id) {
        return dificultadDao.findById(id).orElse(null);
    }
}
