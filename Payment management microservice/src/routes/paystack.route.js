const express = require('express');
const paystackController = require('../controllers/paystack.controller');
const verifyReference = require('../middlewares/verifyPaystack');
const paymentRoute = express.Router();

paymentRoute.post('/pay', paystackController.makePayment);
paymentRoute.get('/verify/:reference',paystackController.getByReference);

module.exports = paymentRoute;
