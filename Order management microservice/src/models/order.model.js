const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  items_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inventory',
      required: true
  }],

  quantity: {
    type: Number,
    required: true
  },

  total_amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'delivered'],
    default: 'pending'
  },
},
{timestamps: true}
);

module.exports = mongoose.model('Order', orderSchema);
