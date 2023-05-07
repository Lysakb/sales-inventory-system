const express = require("express");
const userController = require("../controllers/user.controller");
const userServices = require('../services/user.service');
const authorization = require('../middlewares/authorization');
const authenticateUser = require("../middlewares/authentication");
const {
  createUserValidator,
  loginValidator,
} = require("../middlewares/validators");
const userRoute = express.Router();


userRoute.post("/create", createUserValidator, userController.createUser);
userRoute.post("/login", loginValidator, userController.loginUser);
userRoute.get("/get/:id", authenticateUser, authorization, userController.getUserById);
userRoute.get("/get", authenticateUser , authorization, userController.getAllUsers);
userRoute.patch("/update/:id", authenticateUser , authorization, userController.updateUser);
userRoute.delete("/delete/:id", authenticateUser , authorization, userController.deleteUser);


module.exports = userRoute;
