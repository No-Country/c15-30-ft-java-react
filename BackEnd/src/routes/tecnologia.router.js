const { getAll, create, getOne, remove, update } = require('../controllers/tecnologias.controller');
const express = require('express');

const tecnologiaRouter = express.Router();

tecnologiaRouter.route('/')
    .get(getAll)
    .post(create);

tecnologiaRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = tecnologiaRouter;
