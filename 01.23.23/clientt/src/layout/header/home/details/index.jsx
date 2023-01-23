import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./index.scss"
const Details = () => {
    const[data,setData]=useState([])
    const {_id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/user/${_id}`).then((response)=>{
            setData(response.data)
        })
    })
  return (
    <div className='detail'>
        <img src={data.img} alt="" />
        <div className='detailyazi'>
            <h1>{data.name}</h1>
            <p>Title :{data.title}</p>
            <p>Description :{data.description}</p>
            <p>Price :{data.price}</p>
            <button onClick={()=>{axios.delete(`http://localhost:8000/user/${_id}`)
             navigate("/home")}}>Delete</button>
        </div>

    </div>
  )
}

export default Details