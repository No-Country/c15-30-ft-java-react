const catchError = require('../utils/catchError');
const Tecnologia = require('../models/tecnologia.model');

const getAll = catchError(async (req, res) => {
  const results = await Tecnologia.findAll();
  return res.json(results);
});


const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Tecnologia.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});


module.exports = {
  getAll,
  getOne,
}
