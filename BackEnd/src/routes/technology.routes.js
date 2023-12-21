const { getAllTechnologies, createTechnology, getOneTechnology, updateTechnology, removeTechnology } = require('../controllers/technology.controller');
const express = require('express');

const technologyRouter = express.Router();

technologyRouter.route('/')
  .get(getAllTechnologies)
  .post(createTechnology);

technologyRouter.route('/:id')
  .get(getOneTechnology)
  .put(updateTechnology)
  .delete(removeTechnology);

module.exports = technologyRouter;
