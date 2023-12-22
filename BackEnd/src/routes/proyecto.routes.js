const express = require("express");
const multer = require("multer");
const {
  getAll,
  create,
  getOne,
  remove,
  update,
  setColaborador
} = require("../controllers/proyecto.controller");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const proyectoRouter = express.Router();

proyectoRouter.route("/")
    .get(getAll)
    .post(upload.single('portada'), create);

proyectoRouter.route("/setColaborador")
  .post(setColaborador)
  
proyectoRouter.route("/:id")
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = proyectoRouter;
