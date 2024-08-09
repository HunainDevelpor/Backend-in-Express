const mongoose = require('mongoose');
const { DB_Name } = require('../constant');

const ConnectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
    console.log("MongoDb  Connected :Host !!"+connectionInstance.connection.host);
    
    } catch (error) {
            console.log("Mongodb connection error",error);
                process.exit(1)
    }
    
}

module.exports=ConnectDB