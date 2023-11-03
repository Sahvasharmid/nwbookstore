const express=require("express")
const BookUser=require("../models/usermodel")
const router=express.Router()

    router.post("/create",async(req,res)=>{
        const {title,author,publisher}=req.body
        try{
        if(!title||!author||!publisher){
        res.status(400).send({message:"send all required fields"})
        
        }
        const newBook=new BookUser({title,author,publisher}) 
        await newBook.save();
        res.status(201).json({ message: 'Book created' });
        }
            
        catch(err){
        console.log(err)
        res.status(402).send({message:err.message})
            }
        })
        /*read */
        router.get("/", async(req,res)=>{
            try{
            const bookResult=await BookUser.find()
            res.status(200).json(bookResult)
        
        }
        catch(err){
            console.log(err)
            res.status(400).send({message:err.message})
        }}
        )
        router.get("/:id",async(req,res)=>{
            try{   
            const{id}=req.params
            const Bookid=await BookUser.findById(id)
            return res.status(202).json(Bookid)
        }
        catch(err){
            console.log(err)
        }})
        /*update */
        router.put("/:id",async(req,res)=>{
            const {title,author,publisher}=req.body
         try{ 
            if(!title||!author||!publisher){
            return res.status(400).send({message:"send all required fields"})
             
         }
         const {id}=req.params
           const BookUpdate=await BookUser.findByIdAndUpdate(id,req.body)
           console.log("bookupdate ",BookUpdate)
           if(!BookUpdate){
            res.status(400).send("book not found")
           }
           else{
            res.status(200).send("book updated")
           }
         }  
         catch(err){
        console.log(err)
         } 
        })
        /*delete*/
        router.delete("/:id",async(req,res)=>{
            try{
         const {id}=req.params
           const BookDelete=await BookUser.findByIdAndDelete(id)
           if(!BookDelete){
            res.status(400).send("book not found")
           }
           else{
            res.status(200).send("book deleted")
           }
         }  
         catch(err){
        console.log(err)
         } 
        })
        
        
    module.exports=router