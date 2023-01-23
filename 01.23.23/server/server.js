const express = require('express')
const app = express()
const port = 8000
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    img:{type:String,require:true},
    name:{type:String,require:true},
    title:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:String,require:true},
},
{timestamps:true}
)

app.use(cors())
app.use(bodyParser.json())
const User = mongoose.model('/user', userSchema);




app.get('/user', (req, res) => {
    User.find({},(err,docs)=>{
        if(!err){
        res.send(docs)  
        }
    })
  })

  app.get("/user/:id",(req,res)=>{
    const id=req.params.id
    User.findById(id,(err,docs)=>{
        if(!err){
            res.send(docs)  
            }
    })
  })



  app.delete("/user/:id",(req,res)=>{
    const id=req.params.id
    User.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send(docs)  
            }
    })
  })

app.post("/user",(req,res)=>{
    let newuser=new User({
                img:req.body.img,
                name:req.body.name,
                title:req.body.title,
                description:req.body.description,
                price:req.body.price,
            })
            newuser.save()
})


mongoose.connect('mongodb+srv://gulare:gulareM@cluster0.mg9m8t8.mongodb.net/user',
(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }
}
);
