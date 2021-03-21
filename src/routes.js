const { Router } = require('express');

const handleFail = require('./Controllers/Fail');
const handleTimeout = require('./Controllers/Timeout');
const handleNotFound = require('./Controllers/NotFound');

const routes = Router();

routes.get('/fail', handleFail);
routes.get('/notfound', handleNotFound);
routes.get('/timeout', handleTimeout);

module.exports = routes;
