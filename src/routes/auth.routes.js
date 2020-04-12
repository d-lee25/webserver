const express = require('express');

const controller = require('../controllers/auth.controller');
const authRoutes = express.Router();

authRoutes
    .post('/register', controller.registerUser)
    .post('/login', controller.login);

authRoutes


module.exports = authRoutes;