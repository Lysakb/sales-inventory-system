const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paySchema = new Schema({
  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  reference: {
    type: String,
    required: true,
  },
});

const payload = mongoose.model("Payment", paySchema);

module.exports = payload;
