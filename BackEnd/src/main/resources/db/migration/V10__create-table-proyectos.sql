CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    descripcion VARCHAR(150),
    stack_proyecto INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    lista_tareas INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    lista_colaboradores INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    lista_comentarios INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    dificultad INT REFERENCES dificultades(id) NOT NULL,
    activo BOOLEAN DEFAULT TRUE
);








































































