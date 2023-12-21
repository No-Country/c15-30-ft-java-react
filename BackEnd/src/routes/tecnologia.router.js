const { getAll, create, getOne, remove, update } = require('../controllers/tecnologias.controller');
const express = require('express');

const tecnologiaRouter = express.Router();

tecnologiaRouter.route('/')
  .get(getAll)

tecnologiaRouter.route('/:id')
  .get(getOne)

module.exports = tecnologiaRouter;
