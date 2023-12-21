const { getAll, create, getOne, remove, update } = require('../controllers/dificultad.controller');
const express = require('express');

const dificultadRouter = express.Router();

dificultadRouter.route('/')
  .get(getAll)

dificultadRouter.route('/:id')
  .get(getOne)

module.exports = dificultadRouter; 
