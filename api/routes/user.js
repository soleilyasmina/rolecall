const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = new Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.get("/verify", userController.verify);

module.exports = userRouter;
