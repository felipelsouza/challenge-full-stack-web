const express = require('express');
const userController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', userController.index);
routes.get('/users/:id', userController.indexById)
routes.post('/users', userController.store);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;