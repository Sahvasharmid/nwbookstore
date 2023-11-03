const express=require("express")
const app=express();
const bookrouter=require("./routers/bookrouter")

const cors=require("cors")

app.use(express.json( { extended: false} ));
app.use(express.json())
app.use(cors())

app.use("/newbooks",bookrouter)

const PORT=5555
app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`)
})
