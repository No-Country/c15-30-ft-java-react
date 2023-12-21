package com.cocode.service.impl;

import com.cocode.model.dao.UsuarioDao;
import com.cocode.model.dto.UsuarioDto;
import com.cocode.model.entity.Usuario;
import com.cocode.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioDao usuarioDao;

    @Override
    public List<Usuario> listAll() {
        return (List<Usuario>) usuarioDao.findAll();
    }


    @Transactional
    @Override
    public Usuario save(UsuarioDto usuarioDto) {
        Usuario usuario = Usuario.builder()
                .id(usuarioDto.getId())
                .nombre(usuarioDto.getNombre())
                .apellido(usuarioDto.getApellido())
                .email(usuarioDto.getEmail())
                .password(usuarioDto.getPassword())
                .pais(usuarioDto.getPais())
                .descripcion(usuarioDto.getDescripcion())
                .rol(usuarioDto.getRol())
                .avatar(usuarioDto.getAvatar())
                .puntos(usuarioDto.getPuntos())
                .activo(usuarioDto.getActivo()).build();
        return usuarioDao.save(usuario);
    }


    @Override
    public Usuario findById(Long id) {
        return usuarioDao.findById(id).orElse(null);
    }

    @Override
    public void delete(Usuario usuario) {
        usuarioDao.delete(usuario);
    }

    @Override
    public boolean existById(Long id) {
        return usuarioDao.existsById(id);
    }
}
