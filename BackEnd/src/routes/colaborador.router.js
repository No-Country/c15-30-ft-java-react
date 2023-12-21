const { getAll, create, getOne, remove, update } = require('../controllers/colaborador.controller');
const express = require('express');

const colaboradorRouter = express.Router();

colaboradorRouter.route('/')
    .get(getAll)
    .post(create);

colaboradorRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = colaboradorRouter; 