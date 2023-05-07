const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/order.controller');
const authenticateUser = require('../middlewares/authentication');

orderRouter.post("/create/:id", authenticateUser ,orderController.createOrder);
orderRouter.get("/", authenticateUser, orderController.getOrders);
orderRouter.get("/:id", authenticateUser ,orderController.getOrderById);
orderRouter.patch("/update/:id", authenticateUser ,orderController.updateOrderById);
orderRouter.delete("/delete/:id", authenticateUser ,orderController.deleteOrderById);

module.exports = orderRouter;