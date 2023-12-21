const catchError = require('../utils/catchError');
const Usuario = require('../models/Usuario.model.js');
const bcrypt = require('bcrypt');

const getAll = catchError(async (_, res) => {
  const results = await Usuario.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const { password } = req.body;
  const encrypted = await bcrypt.hash(password, 10);
  const result = await Usuario.create({ ...req.body, password: encrypted });
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Usuario.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Usuario.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Usuario.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

Usuario.prototype.toJSON = function() {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update
}
