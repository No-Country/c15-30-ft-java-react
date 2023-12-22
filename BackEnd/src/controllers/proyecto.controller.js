const catchError = require("../utils/catchError");
const Proyecto = require("../models/proyecto.model.js");
const cloudinary = require("../utils/cloudinary");
const Tarea = require("../models/tarea.model.js");
const Colaborador = require("../models/colaborador.model.js");
const Dificultad = require("../models/dificultad.model.js");
const sequelize = require("../utils/connection.js");

const getAll = catchError(async (req, res) => {
  const results = await Proyecto.findAll({ include: [Tarea, Colaborador] });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No se ha enviado la portada",
        status: 400,
      });
    }

    const portada = req.file.buffer;

    const uploadImage = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "CoCode/proyectos",
            transformation: [
              { height: 350, width: 500, crop: "thumb" },
              {
                color: "#FFFFFF",
                overlay: {
                  font_family: "verdana",
                  font_size: 40,
                  font_weight: "bold",
                  text_align: "left",
                  text: "CoCode",
                },
              },

              { flags: "layer_apply", gravity: "north_west", x: 20, y: 20 },
              { quality: "auto:best" },
            ],
          },
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        )
        .end(portada);
    });

    const imageUrl = uploadImage.secure_url;

    const result = await Proyecto.create({ ...req.body, portada: imageUrl });

    return res.status(200).json({
      message: "Imagen subida con éxito",
      result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error interno del servidor",
      status: 500,
    });
  }
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Proyecto.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Proyecto.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Proyecto.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const setColaborador = catchError(async (req, res) => {
  const {id} = req.body;
  const newProyecto = await Proyecto.findByPk(1)
  console.log(newProyecto)
  const newColaborador = await newProyecto.setColaboradors([1])
  console.log(Proyecto.prototype)
  res.json(newColaborador)
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  setColaborador
};
