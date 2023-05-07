const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

const authenticateUser = async (req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];

            const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
            const options = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            const userResponse = await axios.get(`http://localhost:8089/api/v1/users/get/${verifiedToken.id}`, options)
            
            req.user = userResponse.data.data
            
            next()

             
        }catch(error){
            console.log(error)
            res.status(400).send({message: "Not authorized!"})
        }
    }

    if(!token){
        return res.status(400).send({message: "No token!"})
    }

}

module.exports = authenticateUser;