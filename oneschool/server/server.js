const express = require('express')
const app = express()
const port = 8000
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const { Schema } = mongoose;
app.use(cors())
app.use(bodyParser.json())

const userSchema = new Schema({
    img:  String,
    name: String,
    job:  String,
    title:  String,
})

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

app.post("/user",(req,res)=>{
    let users=new User({
        img:req.body.img,
        name:req.body.name ,
        job:req.body.job,
        title:req.body.title,
    })
    users.save()
})


app.delete("/user/:id",(req,res)=>{
    const id=req.params.id
    User.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }
    })
})


mongoose.connect('mongodb+srv://gulare:gulareM@cluster0.mg9m8t8.mongodb.net/?retryWrites=true&w=majority',
(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }
}
);

