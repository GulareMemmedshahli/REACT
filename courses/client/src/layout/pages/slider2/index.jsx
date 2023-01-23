import Carousel from 'better-react-carousel'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./index.scss"

const Slider2 = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/user").then((responsive)=>{
      setData(responsive.data)
    })
  })
  return (
    <div className='slide2'>
      <h1>Community experts</h1>
  <Carousel cols={4} rows={1} gap={5} loop>
        {data.map((element)=>{
            return(
        <Carousel.Item>
          <div className='datacard'>
          <div>
        <img src={element.img} alt="" />
        <h3>{element.name}</h3>
        <p>{element.title}</p>
        </div>
            </div>
      </Carousel.Item>

            )
        })}
    </Carousel> 
    </div>
  )
}

export default Slider2
