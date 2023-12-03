-- Agregamos el campo lista_colaboradores
ALTER TABLE proyectos
ADD COLUMN lista_colaboradores INTEGER[] DEFAULT ARRAY[]::INTEGER[];

CREATE TABLE proyecto_Colaboradores (
    id SERIAL PRIMARY KEY,
    proyecto_id INT REFERENCES proyectos(id),
    usuario_id INT REFERENCES usuario(id),
    activo BOOLEAN DEFAULT TRUE
);









































































