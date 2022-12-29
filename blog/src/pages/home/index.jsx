import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import "./index.scss"
const Home = () => {
  const [data,Setdata]=useState([])
  useEffect(()=>{
    axios("http://localhost:8000/blogs").then((data)=>{
      Setdata(data.data);
    });
},[]);
  return (
<div>
  {data.map(element=>{
    return( <div className='card'>
      <Link to={`/${element.id}`}>
      <h1>{element.title}</h1>
      <h2>{element.author}</h2>
      <p>{element.body}</p>
      </Link>
   
    </div>
    )
  })}
</div>
  )
  }

export default Home