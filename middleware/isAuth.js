// import jwt
const jwt = require("jsonwebtoken");
//import model
const User = require('../model/User');
require("dotenv").config({path:"../.env"})
const isAuth = async (req,res , next) =>{
    try {
        const token = req.headers['x-auth-token'];

        //check if token
        if(!token){
            return res.status(400).send({msg:"no token unauthorized"})
        }
        console.log("first")
        const decoded = await jwt.verify(token , process.env.PrivateKey) 

        //Try to get user by id
        const user = await User.findById(decoded.id);
        //check if user ?
        if(!user){
            return res.status(400).send({msg :"unauthorized"})
        }
        //Get User
        req.user = user;
        next()
    } catch (error) {
        return res.status(500).send({msg : "Token Errors"})
    }
}

module.exports = isAuth