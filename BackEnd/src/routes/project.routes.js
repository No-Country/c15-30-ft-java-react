const express = require('express');
const { getAllProjects, createProject, getOneProject, updateProject, removeProject } = require('../controllers/Proyecto.controller');

const projectRouter = express.Router();

projectRouter.route('/')
    .get(getAllProjects)
    .post(createProject);

projectRouter.route('/:id')
    .get(getOneProject)
    .put(updateProject)
    .delete(removeProject);

module.exports = projectRouter;
