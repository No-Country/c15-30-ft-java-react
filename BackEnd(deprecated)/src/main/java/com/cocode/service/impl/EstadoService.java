package com.cocode.service.impl;

import com.cocode.model.dao.EstadoDao;
import com.cocode.model.entity.Estado;
import com.cocode.service.IEstadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EstadoService implements IEstadoService {

    @Autowired
    private EstadoDao estadoDao;

    @Transactional(readOnly = true)
    @Override
    public List<Estado> listAll() {
        return (List<Estado>) estadoDao.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Estado findById(Long id) {
        return estadoDao.findById(id).orElse(null);
    }
}
