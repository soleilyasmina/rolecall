const { Router } = require('express');
const roleController = require('../controllers/role');
const { restrict } = require('../utils');

const roleRouter = new Router();

roleRouter.post('/roles', restrict, roleController.createRole);
roleRouter.put('/roles/id', restrict, roleController.updateRoles);
roleRouter.delete('/roles/id', restrict, roleController.deleteRoles);
roleRouter.get('/roles', restrict, roleController.getAllRoles);

module.exports = roleRouter;
