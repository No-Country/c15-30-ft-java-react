package com.cocode.service;

import com.cocode.model.dto.UsuarioDto;
import com.cocode.model.entity.Usuario;

import java.util.List;

public interface IUsuarioService {

    List<Usuario> listAll();
    Usuario save(UsuarioDto usuario);
    Usuario findById(Long id);
    void delete(Usuario usuario);

    boolean existById(Long id);
}
