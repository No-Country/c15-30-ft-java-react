const { getAll, create, getOne, remove, update } = require('../controllers/status.controller');
const express = require('express');

const statusRouter = express.Router();

statusRouter.route('/')
  .get(getAll)

statusRouter.route('/:id')
  .get(getOne)

module.exports = statusRouter;
