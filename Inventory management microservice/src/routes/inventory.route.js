const express = require('express');
const inventoryController = require("../controllers/inventory.controller");
const authenticateUser = require('../middlewares/authentication');
const inventoryRouter = express.Router();

inventoryRouter.post('/create', authenticateUser, inventoryController.create);
inventoryRouter.get('/', authenticateUser, inventoryController.getAll);
inventoryRouter.get('/:id', authenticateUser, inventoryController.getById);
inventoryRouter.patch('/update/:id', authenticateUser, inventoryController.updateProduct);
inventoryRouter.delete('/delete/:id', authenticateUser, inventoryController.deleteProduct);

module.exports = inventoryRouter;