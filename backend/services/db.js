// import mongoose for use
const mongoose = require('mongoose')

/* we create a function that will establish a connection with our 
MongoDB Cluster
*/
const connectDB = async()=>{
    try{
       // mongoose.set( { useUnifiedTopology: true } )
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Connected to db......')
    }catch(err){
      
        process.exit(1)
    }
}   

module.exports=connectDB