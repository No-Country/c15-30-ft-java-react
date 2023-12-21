const express = require("express");
const router = express.Router();

const paisRouter = require("./pais.routes");
const colaboradorRouter = require("./colaborador.router");
const dificultadRouter = require("./dificultad.routes");
const statusRouter = require("./status.router");
const proyectoRouter = require("./proyecto.routes");
const userRouter = require("./user.routes");
const projectRouter = require("./proyecto.routes");
const loginRouter = require("./login.routes");
const technologyRouter = require("./tecnologia.router");
const tareaRouter = require("./tarea.router");
const tecnologiaRouter = require("./tecnologia.router");

router.use("/paises", paisRouter);
router.use("/colaboradores", colaboradorRouter);
router.use("/dificultad", dificultadRouter);
router.use("/proyectos", proyectoRouter);
router.use("/status", statusRouter);
router.use("/tareas", tareaRouter);
router.use("/tecnologias", tecnologiaRouter);
// router.use("/login", loginRouter)


module.exports = router;
