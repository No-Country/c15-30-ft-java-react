package com.cocode.service;

import com.cocode.model.entity.Usuario;

public interface IUsuario {

    Usuario create(Usuario usuario);    // Método para guardar y actualizar

    Usuario findById(Long id);
    Usuario findByName(String nombre);

    void delete(Usuario usuario);
}
