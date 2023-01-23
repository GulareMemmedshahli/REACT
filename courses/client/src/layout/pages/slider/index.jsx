import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import "./index.scss"
import { Link } from 'react-router-dom'


const Slider = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/courses").then((response)=>{
            setData(response.data)
        })
    },[])
  return (
    <div className='slide'>
    <h1>Our featured courses</h1>
    <div className='slider'>
  
   
    <div >
    <Carousel cols={3} rows={1} gap={20} loop>
        {data.map((element)=>{
            return(
        <Carousel.Item>
          <div className='datacard'>
            <Link to={`/${element._id}`}>
            <img src={element.img} alt="" />
            </Link>
   <p>{element.name}</p>
   <h3>{element.title}</h3>
   <p>{element.body}</p>
   <p>{element.price}</p>
<button>Find Out More</button>
            </div>
      </Carousel.Item>

            )
        })}
      
      {/* ... */}
    </Carousel> 
    </div>
    </div>
    </div>
  )
}

export default Slider
