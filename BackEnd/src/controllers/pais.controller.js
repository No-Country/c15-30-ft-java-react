const catchError = require('../utils/catchError');
const Pais = require('../models/pais.model')

const getAll = catchError(async (req, res) => {
  const results = await Pais.findAll();
  return res.json(results);
});


const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Pais.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});


module.exports = {
  getAll,
  getOne,
}
