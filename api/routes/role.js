const { Router } = require('express');
const roleController = require('../controllers/role');
const { restrict } = require('../utils');

const roleRouter = new Router();

roleRouter.post('/roles', restrict, roleController.createRole);
roleRouter.put('/roles/:id', restrict, roleController.updateRole);
roleRouter.delete('/roles/:id', restrict, roleController.deleteRole);
roleRouter.get('/roles', restrict, roleController.getRoles);

module.exports = roleRouter;
