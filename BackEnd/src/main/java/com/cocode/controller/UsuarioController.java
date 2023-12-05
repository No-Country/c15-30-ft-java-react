package com.cocode.controller;

import com.cocode.model.entity.Usuario;
import com.cocode.service.IUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UsuarioController {

    @Autowired
    private IUsuario usuarioService;

    public Usuario create(Usuario usuario) {
        return usuarioService.create(usuario);
    }

    public Usuario update(Usuario usuario) {
        return usuarioService.create(usuario);
    }

    public void delete(Long id) {
        Usuario usuarioDelete = usuarioService.findById(id);
        usuarioService.delete(usuarioDelete);
    }

    public Usuario showById(Long id) {
        return usuarioService.findById(id);
    }
}
