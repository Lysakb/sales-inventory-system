const Order = require('../models/order.model');
const { buildFailedResponse, buildResponse } = require('../utils/response');
const inventoryModel = require('../models/inventory.model');

const createOrder = async (params, payload) => {

    try{  
    const product = await inventoryModel.findById({_id: params.id});

    if(!product || product.isAvailable === false){
      return buildFailedResponse({message: "Product is not available at the moment"});
    }
  
    const order = await Order.create(payload)
      
    await order.save();
    return buildResponse({
        message: "Order created successfully",
        data: order,
        total_amount,
        product: {
          name: product.product_name,
          price: product.price}
    });
  } catch (error) {
    throw new Error(error.message);
  }
};


const getOrders = async (payload) =>{
  try {

    const orders = await Order.find().populate("items_id", {_id: 1, product_name: 1, category: 1, isAvailable: 1});

    if(!orders){
      return buildFailedResponse({message: "Order not found!"})
    }
    return buildResponse({
      message: "order fetched!",
      data: orders
    });
  } catch (error) {
    throw new Error(error.message);
  }
}


const getOrderById = async (params) => {
  try {
    
    const order = await Order.findById({_id: params.id}).populate("items_id", {_id: 1, product_name: 1, category: 1, isAvailable: 1});
    
    if (!order) {
      return buildFailedResponse({message: "Orders not found"})
    }

    return buildResponse({
        message: "Orders fetched successfully",
        data: order
    })
  } catch (error) {
    throw new Error(error.message);
  }
};


const updateOrderById = async (params, payload) =>{
  try {
    const order = payload
    const updateOrder = await Order.findByIdAndUpdate({_id: params.id}, order, { new: true });
    if (!updateOrder) {
      return buildFailedResponse({message: "Order not found!"});
    }
    return buildResponse({
        message: "Order updated successfully",
        data: updateOrder
    });
  } catch (error) {
    throw new Error(error.message);
  }
}


const deleteOrderById = async (params) => {
  try {
    const order = await Order.findByIdAndDelete({_id: params.id});
    if (!order) {
      return buildFailedResponse('Order not found');
    }
    return buildResponse({message: "Order deleted successfully"});
  } catch (error) {
    throw new Error(error.message);
  }
};

// // Function to calculate the total amount of an order
// function calculateTotalAmount(){
//   let totalAmount = 0;
//   Order.items_id.forEach((item) => {
//     totalAmount += item.quantity * items_id.price;
//   });
//   Order.total_amount = totalAmount;
// }


module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById
};
