const jwt = require('jsonwebtoken');
const payModel = require('../models/paystack.model');
require('dotenv').config();

const verifyReference = async (req, res, next) => {
    let token

    try {
        token = req.cookies.token

        if(!token){
            res.status(401).send({message: "Token not found!"})
        }

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        
        req.user = await payModel.findById(decodedToken.id);
        next()
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = verifyReference;