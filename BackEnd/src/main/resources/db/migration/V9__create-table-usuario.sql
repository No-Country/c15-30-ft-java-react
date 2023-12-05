CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    username VARCHAR(10) UNIQUE,
    mail VARCHAR(25) NOT NULL UNIQUE,
    contraseña VARCHAR(8) NOT NULL,
    pais INT REFERENCES paises(id) NOT NULL,
    proyectos INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    proyectos_favoritos INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    stack_usuario INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    activo BOOLEAN DEFAULT TRUE
);







































































