const catchError = require('../utils/catchError');
const Dificultad = require('../models/Dificultad.model');

const getAll = catchError(async (req, res) => {
  const results = await Dificultad.findAll();
  return res.json(results);
});


const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Dificultad.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

module.exports = {
  getAll,
  getOne,
}
