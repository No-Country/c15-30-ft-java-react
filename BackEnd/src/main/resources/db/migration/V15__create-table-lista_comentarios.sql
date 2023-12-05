CREATE TABLE lista_comentarios (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES proyecto_colaboradores(usuario_id),
    proyecto_id INT REFERENCES proyectos(id),
    comentario VARCHAR(100),
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);






































































