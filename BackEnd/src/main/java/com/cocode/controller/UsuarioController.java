package com.cocode.controller;

import com.cocode.model.entity.Usuario;
import com.cocode.service.IUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UsuarioController {

    @Autowired
    private IUsuario usuarioService;

    @PostMapping("usuario")
    public Usuario create(@RequestBody Usuario usuario) {
        return usuarioService.create(usuario);
    }

    @PutMapping("usuario")
    public Usuario update(@RequestBody Usuario usuario) {
        return usuarioService.create(usuario);
    }

    @DeleteMapping("usuario/{id}")
    public void delete(@PathVariable Long id) {
        Usuario usuarioDelete = usuarioService.findById(id);
        usuarioService.delete(usuarioDelete);
    }

    @GetMapping("usuario/{id}")
    public Usuario showById(@PathVariable Long id) {
        return usuarioService.findById(id);
    }
}
