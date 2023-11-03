const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sahvasharmid:Azwaarzan20@cluster0.zdam8iy.mongodb.net/").then(()=>console.log("connected")).catch((err)=>console.log(err))
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true, unique: true },
  });
  
  const BookUser = mongoose.model('NewBook', BookSchema);
  
  module.exports=BookUser
  