const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(cors);
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/authentication").then(()=>console.log("connected to mongodb")).catch((error)=>console.error('Failed ro connect to MongoDb',error));



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
});