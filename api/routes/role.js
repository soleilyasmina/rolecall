const { Router } = require('express');
const roleController = require('../controllers/role');
const { restrict } = require('../utils');

const roleRouter = new Router();

roleRouter.post('/dashboard', restrict, roleController.createRole);
roleRouter.put('/dashboard', restrict, roleController.getAllRoles);
roleRouter.delete('/dashboard', restrict, roleController.getAllRoles);
roleRouter.get('/dashboard', restrict, roleController.getAllRoles);
roleRouter.get('/dashboard', restrict, roleController.getAllRoles);

module.exports = roleRouter;
