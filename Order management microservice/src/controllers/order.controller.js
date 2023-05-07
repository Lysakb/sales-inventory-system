const orderService = require('../services/order.service');

// Controller function to create a new order
const createOrder = async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const data = await orderService.createOrder(req.params, req.body);
    res.status(data.statusCode).json(data);
    
  } catch (error) {
    throw new Error(error.message);
  }
} 

// Controller function to get a list of orders
const getOrders = async (req, res) =>{
  try {
    const data = await orderService.getOrders();
    res.status(data.statusCode).json(data);
  } catch (error) {
    throw new Error(error.message);
  }
}

// Controller function to get an order by ID
const getOrderById = async (req, res) =>{
  try {
    const data = await orderService.getOrderById(req.params, req.body)
    res.status(data.statusCode).json(data);
} catch (error) {
  throw new Error(error.message);
}
}

// Controller function to update an order by ID
const updateOrderById = async (req, res) =>{
  try {
    const data = await orderService.updateOrderById(req.params, req.body);
    res.status(data.statusCode).json(data);
  } catch (error) {
    throw new Error(error.message);
  }
}

// Controller function to delete an order by ID
const deleteOrderById = async (req, res) => {
  try {
    const data = await orderService.deleteOrderById(req.params);
    res.status(data.statusCode).json(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderById,
    deleteOrderById
}
