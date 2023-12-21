const express = require("express");
const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/proyecto.controller");

const proyectoRouter = express.Router();

proyectoRouter.route("/")
    .get(getAll)
    .post(create);

proyectoRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = proyectoRouter;
