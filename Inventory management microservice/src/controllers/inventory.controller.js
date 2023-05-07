const inventoryService = require("../services/inventory.service");

const create = async (req, res) => {
    const data = await inventoryService.create(req.body);
    res.status(data.statusCode).json(data);
};

const getAll = async (req, res) => {
    const data = await inventoryService.getAll();
    res.status(data.statusCode).json(data);
};

const getById = async (req, res) => {
    const data = await inventoryService.getById(req.params);
    res.status(data.statusCode).json(data);
};

const updateProduct = async (req, res) => {
    const data = await inventoryService.update(req.params, req.body);
    res.status(data.statusCode).json(data);
};

const deleteProduct = async (req, res) => {
    const data = await inventoryService.deleteProduct(req.params);
    res.status(data.statusCode).json(data);
};

module.exports = {
    create,
    getAll,
    getById,
    updateProduct,
    deleteProduct
}