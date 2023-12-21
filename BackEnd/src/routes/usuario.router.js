const { getAll, create, getOne, remove, update } = require('../controllers/usuario.controller');
const express = require('express');

const usuarioRouter = express.Router();

usuarioRouter.route('/')
    .get(getAll)
    .post(create);

usuarioRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = usuarioRouter;