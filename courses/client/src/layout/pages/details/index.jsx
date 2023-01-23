import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"
const Details = () => {
    const[data,setdetail]=useState([])
    const {_id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios(`http://localhost:8000/courses/${_id}`).then((response)=>{
            setdetail(response.data)
        })
    })
    console.log(data);
  return (
    <div className='details'>
        <img src={data.img} alt="" />
        <div>
        <h1>{data.name}</h1>
      <p>Title :{data.title}</p>
      <p>Price :{data.price}</p>
      <button className='detailbtn' onClick={()=>{axios.delete(`http://localhost:8000/courses/${_id}`)
      navigate("/")}}>Delete</button>
        </div>
     
    </div>
  )
}

export default Details
