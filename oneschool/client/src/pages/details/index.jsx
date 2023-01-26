import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Helmet} from "react-helmet";
import "./index.scss"
const Details = () => {
  const {_id}=useParams()
  const navigate=useNavigate()
  const[data,setData]=useState([])
useEffect(()=>{
  axios.get(`http://localhost:8000/user/${_id}`).then((response)=>{
  setData(response.data)
})
})

const handledelete=()=>{
  axios.delete(`http://localhost:8000/user/${_id}`)
navigate("/")
}
  return (
    <div className='details'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{`${data.name},Details`}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <img src={data.img} alt="" />
      <div className='detailstext' >
      <h2>{data.name}</h2>
<p>Job :{data.job}</p>
<p>Title :{data.title}</p>
<button onClick={()=>handledelete()}>Delet</button>
      </div>


    </div>
  )
}

export default Details