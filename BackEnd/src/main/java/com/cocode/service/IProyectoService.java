package com.cocode.service;

import com.cocode.model.dto.ProyectoDTO;
import org.springframework.http.ResponseEntity;

public interface IProyectoService {
    public ResponseEntity<?> guardarProyecto(ProyectoDTO proyectoDTO);
    public ResponseEntity<?> buscarProyecto(Long id);
    public ResponseEntity<?> traerTodo();
    public ResponseEntity<?> modificarProyecto(ProyectoDTO proyectoDTO, Long id);
    public ResponseEntity<?> eliminarProyecto(Long id);
}
