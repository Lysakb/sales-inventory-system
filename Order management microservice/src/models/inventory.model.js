const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['electronics', 'clothing', 'home appliances', 'books'],
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
//   supplier: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Supplier',
//     required: true
//   },
},
{timestamps: true}
);

module.exports = mongoose.model('Inventory', inventorySchema);
