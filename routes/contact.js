const express = require('express');
const router = express.Router();
const controllers = require("../controllers/contactControllers")

//test Routing....
// router.get('/hi',(req,res)=>{
//     res.send("hello routing")
// })


//post contact
//Method Post
// path : http://localhost:7200/api/contact/
router.post("/",controllers.postContact)

// Get Contacts 
//Method get
// path : http://localhost:7200/api/contact/
router.get("/",controllers.getContacts)

// Get Contact By id
//Method get
// path : http://localhost:7200/api/contact/
router.get("/:id",controllers.getContactByID)

// Delete Contact By id
//Method delete
// path : http://localhost:7200/api/contact/
router.delete("/:id",controllers.deleteContact)

// update Contact By id
//Method put
// path : http://localhost:7200/api/contact/
router.put("/:id",controllers.editContact)

module.exports = router