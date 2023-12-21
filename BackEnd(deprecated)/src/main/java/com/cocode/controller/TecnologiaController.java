package com.cocode.controller;

import com.cocode.model.dto.TecnologiaDto;
import com.cocode.model.entity.Tecnologia;
import com.cocode.model.payload.ResponseMessage;
import com.cocode.service.ITecnologiaService;
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
public class TecnologiaController {

    @Autowired
    private ITecnologiaService tecnologiaService;

    @GetMapping("tecnologias")
    public ResponseEntity<?> showAll() {
        List<Tecnologia> getList = tecnologiaService.listAll();

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

    @GetMapping("tecnologia/{id}")
    public ResponseEntity<?> showById(@PathVariable Long id) {
        Tecnologia tecnologia = tecnologiaService.findById(id);

        if (tecnologia == null) {

            return new ResponseEntity<>(
                    ResponseMessage.builder()
                            .message("El registro que intentas buscar no existe")
                            .object(null)
                            .build(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(
                ResponseMessage.builder().message("").object(TecnologiaDto.builder()
                                .id(tecnologia.getId())
                                .nombre(tecnologia.getNombre()).build())
                        .build(), HttpStatus.OK);

    }
}
