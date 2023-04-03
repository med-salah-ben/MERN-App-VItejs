const Contact = require("../model/Contact");


//desc : Add neww Contact

exports.postContact = async (req,res)=>{
    try {
            // destruct req body
    const {name , email } = req.body;
    
    // create a new contact with the model Contact
    const newContact = new Contact(req.body)
    // test if the user has an email
    if(!name || !email){
        res.status(400).send({message : "name & email is required check again"})
        return
    }
    //test 2 : if the email already exist 
    const user = await Contact.findOne({email:req.body.email})
    if(user){
        res.status(400).send({message : "user already exit email should be unique"})
        return;
    }
    //save the contact
    const response = await newContact.save();
    res.status(200).send({response:response , message:"user is saved"});
    } catch (error) {
        res.status(500).send({message:"can not save it"})
        console.log(error)
    }
}


//desc : GET All Contacts
exports.getContacts = async(req,res)=>{
    try {
        const result = await Contact.find();
        res.status(200).send({response:result , message : "getting contacts successfully"})
    } catch (error) {
        res.status(500).send({message:"can not get contacts"})
        console.log(error)
    }
}

//desc : GET Contact By ID
exports.getContactByID = async(req,res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id});
        res.status(200).send({response:result , message : "getting contact By ID successfully"})
    } catch (error) {
        res.status(500).send({message:"can not get contact By ID"})
        console.log(error)
    }
}

//Delete Contact By params ID

exports.deleteContact = async (req,res)=>{
    try {
        const query = {_id:req.params.id}
        await Contact.deleteOne(query)
        res.status(200).send({message:"User Deleted"})
    } catch (error) {
        res.status(500).send({message:"can not delete it"})
    }
}

//Update Contact By params ID

exports.editContact = async (req,res)=>{
    try {

        const query = {_id:req.params.id}
        const result = await Contact.updateOne(query , {$set:{...req.body}})
        res.status(200).send({message:"User updated"})
    } catch (error) {
        res.status(500).send({message:"can not update it"})
    }
}