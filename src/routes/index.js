const express = require('express');
const routes = express.Router();

const front = require('../app/controllers/frontControllers');

routes.get('/', front.index);
// routes.get('/landing');

module.exports = routes;