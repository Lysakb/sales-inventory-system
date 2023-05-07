const supplierModel = require("../models/supplier.model");
const { buildFailedResponse, buildResponse} = require("../utils/response");

const addSupplier = async (payload) => {
    try {
        const {full_name, company_name, company_address, company_email, product_name, category, price, quantity} = payload;

        const supplier = await supplierModel.create({
            full_name: full_name,
            company_name: company_name,
            company_address: company_address,
            company_email: company_email,
            product_name: product_name,
            category: category,
            price: price,
            quantity: quantity,
        });

        await supplier.save();

        return buildResponse({
            message: "Supplier added successfully!",
            data: supplier
        })
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllSuppliers = async (payload) => {
  try {
    const suppliers = await supplierModel.find();
    if (!suppliers) {
      return buildFailedResponse({message: "No supplier found!"});
    }
   return buildResponse({data: suppliers})
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSupplierById = async (params) => {
  try {
    const supplier = await supplierModel.findById({_id: params.id});
    
    if (!supplier) {
      return buildFailedResponse({message: "supplier can not found"});
    }
    return buildResponse({data: supplier});
  } catch (error) { 
    throw new Error(error.message);
  }
};

const updateSupplier = async (params, payload) => {
    try {
    const supplier = payload;

    const updateSupplier = await supplierModel.findByIdAndUpdate({_id: params.id}, supplier, { new: true });

    if(!updateSupplier){
        return buildFailedResponse({message: "Supplier cannot be found"})
     }

     await updateSupplier.save();

     return buildResponse({
        message: "Supplier updated successfully!",
        data: updateSupplier
     });

    } catch (error) {
        throw new Error(error.message);
    };
};

const deleteSupplier = async (params) => {
    try {
        const supplier = await supplierModel.findByIdAndDelete({_id: params.id});

        if(!supplier){
            return buildFailedResponse({message: 'Supplier not found'})
        }

        return buildResponse({message: 'Supplier deleted successfully'})

    } catch (error) {
        throw new Error(error.message);
    }
};



module.exports = {
  addSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
};
