CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    apellido VARCHAR NOT NULL,
    username VARCHAR UNIQUE,
    mail VARCHAR NOT NULL UNIQUE,
    contraseña VARCHAR NOT NULL,
    pais INT REFERENCES paises(id) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    proyectos INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    proyectos_favoritos INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    stack_usuario INTEGER[] DEFAULT ARRAY[]::INTEGER[]
);







































































