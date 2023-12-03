-- Corrigiendo lista_comentarios
ALTER TABLE lista_comentarios
ADD COLUMN proyecto_id INT REFERENCES proyectos(id);


CREATE TABLE stack_proyecto (
    id SERIAL PRIMARY KEY,
    proyecto_id INT REFERENCES proyectos(id),
    tecnologia_id INT REFERENCES tecnologias(id),
    activo BOOLEAN DEFAULT TRUE
);










































































