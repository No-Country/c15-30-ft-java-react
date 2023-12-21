const { getAll, create, getOne, remove, update } = require('../controllers/dificultad.controller');
const express = require('express');

const dificultadRouter = express.Router();

dificultadRouter.route('/')
    .get(getAll)
    .post(create);

dificultadRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = dificultadRouter; 