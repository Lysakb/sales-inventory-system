const supplierService = require("../services/supplier.service");

const createSupplier = async (req, res) => {
    const data = await supplierService.addSupplier(req.body);
    res.status(data.statusCode).json(data);
};

const getAllSuppliers = async (req, res) => {
    const data = await supplierService.getAllSuppliers();
    res.status(data.statusCode).json(data);
};

const getSupplierById = async (req, res) => {
    const data = await supplierService.getSupplierById(req.params);
    res.status(data.statusCode).json(data);
};

const updateSupplier = async (req, res) => {
    const data = await supplierService.updateSupplier(req.params, req.body);
    res.status(data.statusCode).json(data);
};

const deleteSupplier = async (req, res) => {
    const data = await supplierService.deleteSupplier(req.params);
    res.status(data.statusCode).json(data);
};

module.exports = {
    createSupplier,
    getAllSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier
}