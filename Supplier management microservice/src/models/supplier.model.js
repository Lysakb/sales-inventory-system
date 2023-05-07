const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },

    company_name: {
        type: String,
        required: true
    },

    company_address: {
        type: String,
        required: true
    },

    company_email: {
        type: String,
        required: true,
        unique: true
    },

    product_name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Supplier', supplierSchema);