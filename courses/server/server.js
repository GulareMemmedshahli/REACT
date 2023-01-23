const express = require('express')
const app = express()
const port = 8000
const cors =require("cors")
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const { Schema } = mongoose;


const coursesSchema = new Schema({
    img:{type:String,require:true},
    name:{type:String,require:true},
    title:{type:String,require:true },
    body:{type:String,require:true },
    price:{type:String,require:true },
},
{timestamps:true})

const userSchema = new Schema({
    img:{type:String,require:true},
    name:{type:String,require:true},
    title:{type:String,require:true },
},
{timestamps:true})

const Courses = mongoose.model('/courses', coursesSchema);
const User = mongoose.model('/user', userSchema);
app.use(cors())
app.use(bodyParser.json())

app.get('/courses', (req, res) => {
    Courses.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500)
        }
    })
})
app.get('/user', (req, res) => {
    User.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500)
        }
    })
})

app.get("/courses/:id",(req,res)=>{
const id=req.params.id
Courses.findById(id,(err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        res.status(500)
    }
})
})

app.delete("/courses/:id",(req,res)=>{
    const id=req.params.id
    Courses.findOneAndDelete(id,(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500)
        }
    })
})

app.post("/courses",(req,res)=>{
    let courses1=new Courses({
        img:req.body.img,
        name:req.body.name,
        title:req.body.title,
        body:req.body.body,
        price:req.body.price,
    })
    courses1.save()
})

mongoose.connect("mongodb+srv://gulare:gulareM@cluster0.mg9m8t8.mongodb.net/courses",
(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    }
}
);

