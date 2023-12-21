package com.cocode.service.impl;

import com.cocode.model.dao.TecnologiaDao;
import com.cocode.model.entity.Tecnologia;
import com.cocode.service.ITecnologiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TecnologiaService implements ITecnologiaService {

    @Autowired
    private TecnologiaDao tecnologiaDao;

    @Transactional(readOnly = true)
    @Override
    public List<Tecnologia> listAll() {
        return (List<Tecnologia>) tecnologiaDao.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Tecnologia findById(Long id) {
        return tecnologiaDao.findById(id).orElse(null);
    }
}
