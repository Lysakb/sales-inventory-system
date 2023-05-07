const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },

    middle_name: {
        type: String
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    phone_number: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['admin','customer'],
        default: 'customer'
    }

},
{timestamps: true}
);

module.exports = mongoose.model("users", userSchema);