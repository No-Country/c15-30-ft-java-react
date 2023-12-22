const express = require("express");

const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/comentario.controller");
const proyectoRouter = require("./proyecto.routes");

const comentarioRouter = express.Router();

comentarioRouter.route("/")
  .get(getAll)
  .post(create);

proyectoRouter.route("/.id")
  .get(getOne)
  .delete(remove)
  .put(update);
