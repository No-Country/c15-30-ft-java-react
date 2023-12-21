package com.cocode.service.impl;

import com.cocode.model.dao.ProyectoDao;
import com.cocode.model.dto.ProyectoDto;
import com.cocode.model.entity.Proyecto;
import com.cocode.service.IProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProyectoService implements IProyectoService {

    @Autowired
    private ProyectoDao proyectoDao;

    @Override
    public List<Proyecto> listAll() {
        return (List<Proyecto>) proyectoDao.findAll();
    }

    @Transactional
    @Override
    public Proyecto save(ProyectoDto proyectoDto) {
        Proyecto proyecto = Proyecto.builder()
                .id(proyectoDto.getId())
                .nombre(proyectoDto.getNombre())
                .descripcion(proyectoDto.getDescripcion())
                .portada(proyectoDto.getPortada())
                .dificultad(proyectoDto.getDificultad())
                .activo(proyectoDto.getActivo())
                .build();
        return proyectoDao.save(proyecto);
    }

    @Override
    public Proyecto findById(Long id) {
        return proyectoDao.findById(id).orElse(null);
    }

    @Override
    public void delete(Proyecto proyecto) {
        proyectoDao.delete(proyecto);
    }

    @Override
    public boolean existById(Long id) {
        return proyectoDao.existsById(id);
    }
}
