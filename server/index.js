const morgan = require("morgan")
const express = require("express");
const cors = require("cors")
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const todoRoutes = require("./routes/taskRoutes")
const app = express();

const dotenv = require("dotenv").config();

//database config
connectDB();

//middlewares

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())



//routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/task", todoRoutes)


app.get("/", (req,res) => {
    res.send({
        message: "Welcome to todo app"
    })
})

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})

