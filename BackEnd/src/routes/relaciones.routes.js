const {
  asociarTecnologiasAUsuario,
} = require("../controllers/relaciones.controller");
const express = require("express");

const relationsRouter = express.Router();

relationsRouter.route("/")
  .post(asociarTecnologiasAUsuario);

module.exports = relationsRouter;
