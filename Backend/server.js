import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoutes.js";
import connectDB from "./config/db.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}))

app.use(cors());

app.use("/",todoRoutes);



app.listen(port,()=>{
    console.log(`App is listening at PORT ${port}.`)
});