import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./database/db";
import { clearConfigCache } from "prettier";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is runningatport:
        ${process.env.PORT}`);
    })
})
.catch((error) =>{
    console.log("MONGO DB connection failed!!! ",error);
})













/*
import  express  from "express";
const app = express()

(async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("ERROR");
            throw error
        })
        app.listen(process.env.PORT,() =>{
            console.log(`App is Listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.log("Error: Fsiled to conntec with server",error)
        throw error
    }
})()*/