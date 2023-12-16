package com.cocode.service.impl;

import com.cocode.model.dao.PaisDao;
import com.cocode.model.entity.Pais;
import com.cocode.service.IPaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PaisService implements IPaisService {

    @Autowired
    private PaisDao paisDao;

    @Transactional(readOnly = true)
    @Override
    public List<Pais> listAll() {
        return (List<Pais>) paisDao.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Pais findById(Long id) {
        return paisDao.findById(id).orElse(null);
    }
}
