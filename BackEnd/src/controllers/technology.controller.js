const catchError = require('../utils/catchError');
const Technology = require('../models/technology.model');

const getAllTechnologies = catchError(async(_, res) => {
    const results = await Technology.findAll();
    return res.json(results);
});

const createTechnology = catchError(async(req, res) => {
    const result = await Technology.create(req.body);
    return res.status(201).json(result);
});

const getOneTechnology = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Technology.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const removeTechnology = catchError(async(req, res) => {
    const { id } = req.params;
    await Technology.destroy({ where: { id } });
    return res.sendStatus(204);
});

const updateTechnology = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Technology.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAllTechnologies,
    createTechnology,
    getOneTechnology,
    removeTechnology,
    updateTechnology
};
