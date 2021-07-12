const { Router } = require("express");
const userController = require("../controllers/user");
const { restrict } = require("../utils");

const userRouter = new Router();

userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);
userRouter.get("/verify", restrict, userController.verify);
userRouter.put("/profile", restrict, userController.updateProfile);

module.exports = userRouter;
