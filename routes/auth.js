const express = require('express');
const router = express.Router();
const controllers = require("../controllers/authcontroller");
const {validator , loginRules , registerRules} =require('../middleware/validator');
const isAuth = require('../middleware/isAuth');

router.post("/register", registerRules() , validator , controllers.userRegister);

router.post("/login", loginRules() , validator ,controllers.userLogin)

router.get("/user" ,isAuth,(req,res)=>{
    res.status(200).send({user:req.user})
})

module.exports = router ;