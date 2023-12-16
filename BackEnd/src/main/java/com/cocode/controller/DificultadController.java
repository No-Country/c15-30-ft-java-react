package com.cocode.controller;

import com.cocode.model.dto.DificultadDto;
import com.cocode.model.dto.PaisDto;
import com.cocode.model.entity.Dificultad;
import com.cocode.model.payload.ResponseMessage;
import com.cocode.service.IDificultadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class DificultadController {

    @Autowired
    private IDificultadService dificultadService;

    @GetMapping("dificultades")
    public ResponseEntity<?> showAll() {
        List<Dificultad> getList = dificultadService.listAll();

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

    @GetMapping("dificultad/{id}")
    public ResponseEntity<?> showById(@PathVariable Long id) {
        Dificultad dificultad = dificultadService.findById(id);

        if (dificultad == null) {

            return new ResponseEntity<>(
                    ResponseMessage.builder()
                            .message("El registro que intentas buscar no existe")
                            .object(null)
                            .build(), HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<>(
                ResponseMessage.builder().message("").object(DificultadDto.builder()
                                .id(dificultad.getId())
                                .nombre(dificultad.getNombre()).build())
                        .build(), HttpStatus.OK
        );
    }
}
