const { body, validationResult } = require('express-validator');

const registerRules = ()=>[
    body('name',"name is required").notEmpty(),
    body('lastName',"Last Name is required").notEmpty(),
    body('email',"email is required").isEmail(),
    body('password',"password most contain 5 car").isLength({
        min:5,
        max:18
    })
]

const loginRules = ()=>[
    body('email',"email is required").isEmail(),
    body('password',"password most contain 5 car").isLength({
        min:5,
        max:18
    })
]

const validator =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }    
    next()
}

module.exports = {loginRules ,registerRules , validator}