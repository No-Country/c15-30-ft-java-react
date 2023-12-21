const { getAll, create, getOne, remove, update } = require('../controllers/colaborador.controller');
const express = require('express');

const colaboradorRouter = express.Router();

paisRouter.route('/')
    .get(getAll)
    .post(create);

paisRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = colaboradorRouter;