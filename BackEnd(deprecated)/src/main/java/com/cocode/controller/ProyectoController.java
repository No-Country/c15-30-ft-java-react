package com.cocode.controller;

import com.cocode.model.dto.ProyectoDto;
import com.cocode.model.entity.Proyecto;
import com.cocode.model.payload.ResponseMessage;
import com.cocode.service.IProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ProyectoController {

    @Autowired
    private IProyectoService proyectoService;

    @GetMapping("proyectos")
    public ResponseEntity<?> showAll() {
        List<Proyecto> getList = proyectoService.listAll();

        if (getList == null) {
            return new ResponseEntity<>(
                    ResponseMessage.builder()
                            .message("No hay registros")
                            .object(null)
                            .build()
                    , HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(
                ResponseMessage.builder()
                        .message("")
                        .object(getList)
                        .build()
                , HttpStatus.OK);
    }

    @GetMapping("proyecto/{id}")
    public ResponseEntity<?> showById(@PathVariable Long id) {
        Proyecto proyecto = proyectoService.findById(id);

        if (proyecto == null) {

            return new ResponseEntity<>(
                    ResponseMessage.builder()
                            .message("El registro que intentas buscar no existe")
                            .object(null)
                            .build(), HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<>(
                ResponseMessage.builder().message("").object(ProyectoDto.builder()
                        .id(proyecto.getId())
                        .nombre(proyecto.getNombre())
                        .descripcion(proyecto.getDescripcion())
                        .portada(proyecto.getPortada())
                        .dificultad(proyecto.getDificultad())
                        .activo(proyecto.getActivo())
                        .build()
                ).build(), HttpStatus.OK
        );
    }

    @PostMapping("proyecto")
    public ResponseEntity<?> create(@RequestBody ProyectoDto proyectoDto) {
        Proyecto proyectoSave = null;

        try {
            proyectoSave = proyectoService.save(proyectoDto);

            return new ResponseEntity<>(ResponseMessage.builder()
                    .message("Proyecto registrado correctamente")
                    .object(ProyectoDto.builder()
                            .id(proyectoDto.getId())
                            .nombre(proyectoDto.getNombre())
                            .descripcion(proyectoDto.getDescripcion())
                            .portada(proyectoDto.getPortada())
                            .dificultad(proyectoDto.getDificultad())
                            .activo(proyectoDto.getActivo())
                            .build())
                    .build(), HttpStatus.OK);
        } catch (DataAccessException exDA) {

            return new ResponseEntity<>(ResponseMessage.builder().message(exDA.getMessage())
                    .object(null).build(), HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    @DeleteMapping("proyecto/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Proyecto proyectoDelete = null;

        try {
            proyectoDelete = proyectoService.findById(id);

            proyectoService.delete(proyectoDelete);

            return new ResponseEntity<>(proyectoDelete, HttpStatus.NO_CONTENT);
        } catch (DataAccessException exDA) {

            return new ResponseEntity<>(ResponseMessage.builder()
                    .message(exDA.getMessage())
                    .object(null)
                    .build(), HttpStatus.METHOD_NOT_ALLOWED);
        }
    }

    // TODO: Método PUT para proyecto
}
