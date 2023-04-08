const mongoose = require("mongoose");
const MONGO_URI = require("../secret")

const colors = require("colors");

const URL = process.env.MONGO_URI || MONGO_URI
const connectDB = async () => {
console.log("db => ",process.env.MONGO_URI);
    try{
        const conn = await mongoose.connect(URL);
        
        console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.black);
        
        
    }catch (error) {
        
        console.log(`Error in mongoose ${error}`.bgRed.white);
        
    }

}

module.exports = connectDB;