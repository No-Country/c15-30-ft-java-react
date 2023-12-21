package com.cocode.controller;

import com.cocode.model.dto.EstadoDto;
import com.cocode.model.entity.Estado;
import com.cocode.model.payload.ResponseMessage;
import com.cocode.service.IEstadoService;
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
public class EstadoController {

    @Autowired
    private IEstadoService estadoService;

    @GetMapping("status")
    public ResponseEntity<?> showAll() {
        List<Estado> getList = estadoService.listAll();

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

    @GetMapping("status/{id}")
    public ResponseEntity<?> showById(@PathVariable Long id) {
        Estado estado = estadoService.findById(id);

        if (estado == null) {

            return new ResponseEntity<>(
                    ResponseMessage.builder()
                            .message("El registro que intentas buscar no existe")
                            .object(null)
                            .build(), HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<>(
                ResponseMessage.builder().message("").object(EstadoDto.builder()
                        .id(estado.getId())
                        .nombre(estado.getNombre()).build())
                        .build(), HttpStatus.OK
        );
    }
}
