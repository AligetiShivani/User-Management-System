const mongoose =require("mongoose")

const connectDB =async()=>{
  try{

    const con= await mongoose.connect(process.env.MONGODB_URL)
      console.log(`MongoDB connected :${con.connection.host}`);
    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
}
module.exports=connectDB;