const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("Database connected....")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;