-- Agregar una restricción UNIQUE al campo usuario_id
ALTER TABLE proyecto_colaboradores
ADD CONSTRAINT unique_usuario_id UNIQUE (usuario_id);


CREATE TABLE lista_tareas (
    id SERIAL PRIMARY KEY,
    proyecto_id INT REFERENCES proyectos(id),
    nombre VARCHAR NOT NULL,
    descripcion VARCHAR NOT NULL,
    colaborador_id INT REFERENCES proyecto_colaboradores(usuario_id),
    status_id INT REFERENCES status(id),
    activo BOOLEAN DEFAULT TRUE
);











































































