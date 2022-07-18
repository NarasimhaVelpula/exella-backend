const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express()

const PORT=process.env.PORT || 3001
const MONGO_CONNECTION_STRING="mongodb+srv://exella:exella@cluster0.uj6di.mongodb.net/?retryWrites=true&w=majority"
const billRouter=require('./routes/bills')
app.use(cors())
app.use(express.json())
app.use("/",billRouter)


mongoose.connect(MONGO_CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,err=>{
            if(err){
                console.log("Server crashed, Error is "+err)
            }
            else{
                console.log("Server running under port"+PORT)
            }
        })
    })
    .catch((error)=>{console.log(error)});

