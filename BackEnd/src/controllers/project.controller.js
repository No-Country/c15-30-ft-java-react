const catchError = require('../utils/catchError');
const Project = require('../models/project.model');

const getAllProjects = catchError(async(_, res) => {
    const results = await Project.findAll();
    return res.json(results);
});

const createProject = catchError(async(req, res) => {
    const result = await Project.create(req.body);
    return res.status(201).json(result);
});

const getOneProject = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Project.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const removeProject = catchError(async(req, res) => {
    const { id } = req.params;
    await Project.destroy({ where: { id } });
    return res.sendStatus(204);
});

const updateProject = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Project.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAllProjects,
    createProject,
    getOneProject,
    removeProject,
    updateProject
};
