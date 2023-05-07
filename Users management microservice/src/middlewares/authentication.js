const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
require("dotenv").config();

const authenticateUser = async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
        
            req.user = await userModel.findById(verifiedToken.id);
            next()

             
        }catch(error){
            res.status(400).send({message: "Not authorized!"})
        }
    }

    if(!token){
        return res.status(400).send({message: "No token!"})
    }

}

module.exports = authenticateUser;