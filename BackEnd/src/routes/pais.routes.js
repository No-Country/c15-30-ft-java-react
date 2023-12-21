const { getAll, create, getOne, remove, update } = require('../controllers/pais.controller');
const express = require('express');

const paisRouter = express.Router();

paisRouter.route('/')
  .get(getAll)
// .post(create);

paisRouter.route('/:id')
  .get(getOne)
// .delete(remove)
// .put(update);

module.exports = paisRouter;
