const express=require("express")
const app=express();
const bookrouter=require("./routers/bookrouter")

import path from "path";
const cors=require("cors")

app.use(express.json( { extended: false} ));
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'./frontend/myapp/build')))
app.use("/newbooks",bookrouter)
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./frontend/myapp/build/index.html"))
    })
  
  
const PORT=5555||process.env.PORT
app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`)
})