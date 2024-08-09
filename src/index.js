const { app } = require('./app');
const ConnectDB = require('./db/index');
const dotenv = require('dotenv').config();



const port=process.env.PORT || 8000

ConnectDB()
.then(()=>{
    app.on("errror",(error)=>{
        console.log("Errr",error);
        throw error
    })
    app.listen(port,()=>{
        console.log(`Server is running at :${port}  Port `);
    })
    
})
.catch((error)=>{
console.log("after DB connection",error);
})















// const mongoose = require('mongoose');
// const express = require('express');
// const { DB_Name } = require('./constant');
// const app=express()
// ;(async()=>{
//    try {
//     await mongoose.connect(MONGODB_URL+DB_Name)
//     app.on("errror",(error)=>{
//     console.log("error",error)
//     throw error    
//     });
//     app.listen(process.env.PORT,()=>{
//         console.log(`Server is running on port ${process.env.PORT}`);
        
//     })
//    } catch (error) {
//     console.log("error",error);
//     throw error
//    }
    
// })()