const { loginAuth } = require('../controllers/login.controller');
const express = require('express');

const loginRouter = express.Router();

loginRouter.route('/')
    .post(loginAuth)

module.exports = loginRouter;