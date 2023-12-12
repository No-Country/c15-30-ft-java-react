package com.cocode.service.impl;

import com.cocode.model.dao.IProyectoRepository;
import com.cocode.model.dto.ProyectoDTO;
import com.cocode.model.entity.Proyecto;
import com.cocode.service.IProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoService implements IProyectoService {
    @Autowired
    private IProyectoRepository proyectoRepository;

    @Override
    public ResponseEntity<?> guardarProyecto(ProyectoDTO proyectoDTO) {
        Proyecto proyecto= Proyecto.builder()
                .nombre(proyectoDTO.getNombre())
                .descripcion(proyectoDTO.getDescripcion()).build();
        proyectoRepository.save(proyecto);
        return new ResponseEntity<>(proyecto, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> buscarProyecto(Long id) {
        Optional<Proyecto> find =proyectoRepository.findById(id);
        if (find.isEmpty()) return new ResponseEntity<>("No se encontro el proyecto",HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(find.get(),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> traerTodo() {
        List<Proyecto> list= proyectoRepository.findAll();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> modificarProyecto(ProyectoDTO proyectoDTO, Long id) {
        Optional<Proyecto> find=proyectoRepository.findById(id);
        if (find.isEmpty()) return new ResponseEntity<>("No se encontro el proyecto",HttpStatus.NOT_FOUND);
        Proyecto proyecto= find.get();
        proyecto.setNombre(proyecto.getNombre());
        proyecto.setDescripcion(proyectoDTO.getDescripcion());
        proyectoRepository.save(proyecto);
        return new ResponseEntity<>(proyecto,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> eliminarProyecto(Long id) {
        Optional<Proyecto> find =proyectoRepository.findById(id);
        if (find.isEmpty()) return new ResponseEntity<>("No se encontro el proyecto",HttpStatus.NOT_FOUND);
        proyectoRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
