CREATE TABLE proyectos_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuario(id),
    proyecto_id INT REFERENCES proyectos(id) UNIQUE,
    activo BOOLEAN DEFAULT TRUE
);







































































