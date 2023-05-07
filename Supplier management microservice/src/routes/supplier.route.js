const express = require('express');
const supplierController = require("../controllers/supplier.controller");
const authenticateUser = require('../middlewares/authentication');
const supplierRouter = express.Router();

supplierRouter.post('/create', authenticateUser, supplierController.createSupplier);
supplierRouter.get('/', authenticateUser, supplierController.getAllSuppliers);
supplierRouter.get('/:id', authenticateUser, supplierController.getSupplierById);
supplierRouter.patch('/update/:id', authenticateUser, supplierController.updateSupplier);
supplierRouter.delete('/delete/:id', authenticateUser, supplierController.deleteSupplier);

module.exports = supplierRouter;