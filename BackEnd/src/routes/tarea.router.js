const { getAll, create, getOne, remove, update } = require('../controllers/tarea.controller');
const express = require('express');

const tareaRouter = express.Router();

tareaRouter.route('/')
    .get(getAll)
    .post(create);

tareaRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = tareaRouter;