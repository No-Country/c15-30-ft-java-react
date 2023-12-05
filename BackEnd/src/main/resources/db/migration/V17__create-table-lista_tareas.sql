CREATE TABLE lista_tareas (
    id SERIAL PRIMARY KEY,
    proyecto_id INT REFERENCES proyectos(id),
    nombre VARCHAR(15) NOT NULL UNIQUE,
    descripcion VARCHAR(100) NOT NULL,
    colaborador_id INT REFERENCES proyecto_colaboradores(usuario_id),
    status_id INT REFERENCES status(id),
    activo BOOLEAN DEFAULT TRUE
);











































































