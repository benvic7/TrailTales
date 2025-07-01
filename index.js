// libraries
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// paths to various APIs
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

initialize();
async function initialize() {
    // initializing our env file, which securely stores any secrets
    dotenv.config();

    // starting our backend server
    app.listen(8800,()=>{
        console.log("Backend server is running")
    })

    // connecting to MongoDB
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("Connected to MongoDB");
    } 
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// endpoints for various APIs
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);