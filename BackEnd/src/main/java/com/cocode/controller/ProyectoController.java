package com.cocode.controller;

import com.cocode.model.dto.ProyectoDTO;
import com.cocode.service.IProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/proyecto")
public class ProyectoController {
    @Autowired
    private IProyectoService proyectoService;

    @PostMapping("/guardar")
    public ResponseEntity<?> guardar(@RequestBody ProyectoDTO proyectoDTO){
        return proyectoService.guardarProyecto(proyectoDTO);
    }

    @GetMapping("/traerTodo")
    public ResponseEntity<?> traerTodo(){
        return proyectoService.traerTodo();
    }

    @GetMapping("/detalle/{id}")
    public ResponseEntity<?> detalle(@PathVariable Long id){
        return proyectoService.buscarProyecto(id);
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<?> modificar(@RequestBody ProyectoDTO proyectoDTO, @PathVariable Long id){
        return proyectoService.modificarProyecto(proyectoDTO, id);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminar(@PathVariable Long id){
        return proyectoService.eliminarProyecto(id);
    }
}
