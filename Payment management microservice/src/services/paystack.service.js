const axios = require('axios');
const { buildFailedResponse, buildResponse } = require('../utils/response');
const payModel = require('../models/paystack.model');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

const makePayment = async (payload) => {
  try {
    // const userExists = await axios.get(`http://localhost:8089/api/v1/user/get/${payload.email[0]}`)
    // console.log(userExists);

    const { full_name, amount, email } = payload;
    const reference = generateUniqueReference()

    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        full_name,
        amount,
        email,
        reference,
      },
      {
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
        },
      },
    );
   
      const userDetails = await payModel.create({
        full_name,
        email,
        amount,
        reference
      })
      await userDetails.save();

    const { authorization_url } = response.data.data;
  

    return buildResponse({
        data: authorization_url,
        reference,
    });

  } catch (error) {
    return buildFailedResponse({
        message: 'An error occurred while processing payment'
    });
  }
};

const getByReference = async (params) => {
  try {
    const reference = params.reference;
    
    const response = await axios.get(
       
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
        },
      },
    );

    const { gateway_response } = response.data.data;
     
    return buildResponse({ 
        data: gateway_response
    });

  } catch (error) {
    return buildFailedResponse({ 
        message: 'An error occurred while verifying payment'
     });
  }
};

function generateUniqueReference() {
    const uniqueReference = uuidv4();
    return uniqueReference;
  }

module.exports = {
    makePayment,
    getByReference
};
