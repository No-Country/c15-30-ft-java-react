const catchError = require('../utils/catchError');
const Status = require('../models/status.model');

const getAll = catchError(async (req, res) => {
  const results = await Status.findAll();
  return res.json(results);
});


const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Status.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

module.exports = {
  getAll,
  getOne,
}
