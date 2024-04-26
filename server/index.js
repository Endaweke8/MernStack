
const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config();

const cors=require('cors');
const port=process.env.PORT | 3001;

const app=express();
app.use(cors);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server is ready");
})

app.use('/api/users',userRoutes)

app.listen(port,()=>{
    console.log(`The server is running in the port ${port}`);
})