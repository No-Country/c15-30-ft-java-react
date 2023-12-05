package com.cocode.service.impl;

import com.cocode.model.dao.UsuarioDao;
import com.cocode.model.entity.Usuario;
import com.cocode.service.IUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuarioImpl implements IUsuario {

    @Autowired
    private UsuarioDao usuarioDao;

    @Transactional
    @Override
    public Usuario create(Usuario usuario) {
        return usuarioDao.save(usuario);
    }

    @Transactional(readOnly = true)
    @Override
    public Usuario findById(Long id) {
        return usuarioDao.findById(id).orElse(null);
    }

    // TODO: Desarrollar método findByName()
    @Transactional(readOnly = true)
    @Override
    public Usuario findByName(String nombre) {
        return null;
    }
// TODO: Modificar a soft delete
     @Transactional
    @Override
    public void delete(Usuario usuario) {
        usuarioDao.delete(usuario);
    }
}
