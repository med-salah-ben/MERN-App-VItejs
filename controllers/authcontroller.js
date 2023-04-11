const User = require("../model/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config({path:"../.env"})


exports.userRegister = async(req,res) =>{
    const {name , lastName , email , password} = req.body;
    try {
        //simple validation
        // if(!name || !lastName || !email || !password){
        //     return res.status(400).send({msg:"please enter all fields!!!"})
        // }
        //check for existing user
        let user = await User.findOne({email})
        if(user){
            return res.status(400).send({msg:"user already exists"})
        }
        //create new User
        user = new User({name , lastName ,email,password})
        // create salt and hash
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password , saltRounds )
        user.password = hashedPassword;

        //save new user
        await user.save();

        //register user
        const payload = {
            id:user._id
        }
        //Token
        const token = await jwt.sign(payload , process.env.PrivateKey )
        return res.status(201).send({msg:"User Register With Success " , user ,token})
    } catch (error) {
       return res.status(500).send({msg:"register server errors"})
        console.log(error)
    }
}

exports.userLogin =async(req,res) =>{
    const { email , password} = req.body;
    try {
        //simple validation
        // if( !email || !password){
        //     return res.status(400).send({msg:"please enter all fields!!!"})
        // }
        //check for existing user
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).send({msg:"user does not exists"})
        }
        // if password is match
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
          return  res.status(400).send({msg:"Bad Credentials password"})
        }
                //sign user
                const payload = {
                    id:user._id
                }
                //Token
                const token = await jwt.sign(payload , process.env.PrivateKey )

        return res.status(200).send({msg:"User Logged With Success " , user , token})
    } catch (error) {
        return res.status(500).send({msg:"Login server errors"})
    }
}
