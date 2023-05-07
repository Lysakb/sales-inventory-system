const { buildResponse, buildFailedResponse } = require('../utils/response');
const Inventory = require("../models/inventory.model");

const create = async (payload) => {
    try {
        const {product_name, description, price, quantity, category, isAvailable} = payload;

        const createProduct = await Inventory.create({
            product_name: product_name,
            description: description,
            price: price,
            quantity: quantity,
            category: category,
            isAvailable: isAvailable
        });

        await createProduct.save();

        return buildResponse({
            message: "Product added successfully!",
            data: createProduct
        })
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAll = async (payload) => {
    try {
        const products = await Inventory.find();

        if(!products){
            return buildFailedResponse({message: "Products are unavailable at the moment!"})
        }

        return buildResponse({
            message: "Products fetched successfully!",
            data: products
        })
    } catch (error) {
        throw new Error(error.message);
    }
};

const getById = async (params) => {
    try {
        const product = await Inventory.findById({_id: params.id});

        if(!product){
            return buildFailedResponse({message: "Product not found"})
        }

        return buildResponse({
            message: "Product fetched!",
            data: product
        })
    } catch (error) {
        throw new Error(error.message);
    };
};

const update = async (params, payload) => {
    try {
    const product = payload;

    const updateProduct = await Inventory.findByIdAndUpdate({_id: params.id}, product, { new: true });

    if(!updateProduct){
        return buildFailedResponse({message: "Product cannot be found"})
     }

     await updateProduct.save();

     return buildResponse({
        message: "Product updated successfully!",
        data: updateProduct
     });

    } catch (error) {
        throw new Error(error.message);
    };
};

const deleteProduct = async (params) => {
    try {
        const product = await Inventory.findByIdAndDelete({_id: params.id});

        if(!product){
            return buildFailedResponse({message: 'Product not found'})
        }

        return buildResponse({message: 'Product deleted successfully'})

    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteProduct
}