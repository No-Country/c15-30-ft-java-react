CREATE TABLE lista_comentarios (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuario(id),
    comentario VARCHAR,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);









































































