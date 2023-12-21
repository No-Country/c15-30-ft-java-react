const express = require("express");
const router = express.Router();

const paisRouter = require("./pais.routes");
const colaboradorRouter = require("./colaborador.router");
const dificultadRouter = require("./dificultad.routes");
const statusRouter = require("./status.router");
const proyectoRouter = require("./proyecto.routes");
const tareaRouter = require("./tarea.router");
const tecnologiaRouter = require("./tecnologia.router");
const usuarioRouter = require("./usuario.router");
const comentarioRouter = require("./comentario.router");

router.use("/api/v1/usuarios", usuarioRouter);
router.use("/api/v1/proyectos", proyectoRouter);
router.use("/api/v1/paises", paisRouter);
router.use("/api/v1/colaboradores", colaboradorRouter);
router.use("/api/v1/dificultad", dificultadRouter);
router.use("/api/v1/status", statusRouter);
router.use("/api/v1/tareas", tareaRouter);
router.use("/api/v1/tecnologias", tecnologiaRouter);
router.use("/api/v1/comentarios", comentarioRouter)
// router.use("/login", loginRouter)


module.exports = router;
