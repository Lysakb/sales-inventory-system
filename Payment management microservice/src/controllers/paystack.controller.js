const paystackService = require('../services/paystack.service');

const makePayment = async (req, res) => {
    const data = await paystackService.makePayment(req.body);
    // res.cookie("reference", data.data.token, {maxAge: 300000, httpOnly: true,}); 
    return res.status(data.statusCode).json(data);
    
};

const getByReference = async (req, res) => {
    try {
      const data = await paystackService.getByReference(req.params);
      return res.status(data.statusCode).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "An error occurred while verifying payment",
        error: error.message,
      });
    }
  };
  
  
module.exports = {
    makePayment,
    getByReference,
};
