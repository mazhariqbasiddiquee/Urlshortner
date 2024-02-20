const express=require("express")
const app=express()
const shortid = require('shortid');
app.use(express.json())
let obj={}
app.post("/",(req,res)=>{
    let {Longurl}=req.body
    let shorturl=shortid()
    obj[shorturl]=Longurl
  
    res.json({message:shorturl})
    
})

app.get("/:short",(req,res)=>{

    let {short}=req.params
    console.log(short,obj)
    if(obj[short]){
        res.redirect(obj[short])
    }
    else{
        res.status(400).json({message:"url is not fount"})
    }
})




app.listen(4500,(err)=>{
    console.log("server is running")
})