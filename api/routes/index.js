const { Router } = require("express");
const userRouter = require("./user");
const roleRouter = require("./role");

const apiRouter = new Router();
apiRouter.use(userRouter);
apiRouter.use(roleRouter);

module.exports = apiRouter;
