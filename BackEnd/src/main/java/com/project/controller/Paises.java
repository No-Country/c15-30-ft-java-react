package com.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/paises")
public class Paises {

    @GetMapping
    public String testPaises() {
        return "Controlador paises";
    }
}
