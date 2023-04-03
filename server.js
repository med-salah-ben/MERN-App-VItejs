const express = require("express");
require("dotenv").config({ path: "./.env" });
const connectDB = require('./config/connectDB')


const app = express();
// //add middleware routing body parse
app.use(express.json())
//create route 
app.use("/api/contact", require("./routes/contact"))


connectDB();

const PORT = process.env.PORT || 6100;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running in port ${PORT}`)
);
