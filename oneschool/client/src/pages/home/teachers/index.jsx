import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Teachers = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
axios.get("http://localhost:8000/user").then((response)=>{
    setData(response.data)
    })
    },[])

const handleSeacrh=(values)=>{
    axios.get("http://localhost:8000/user").then((response)=>{
        let search=response.data.filter((data)=>data.name.toLowerCase().includes(values.toLowerCase()))
        setData(search)
    })
}

const handleSort=()=>{
    axios.get("http://localhost:8000/user").then((response)=>{
        let sort=response.data.sort((a,b)=>(b.name>a.name?-1:1))
        setData(sort)
    })
}

const handleSortt=()=>{
    axios.get("http://localhost:8000/user").then((response)=>{
    setData(response.data)
    })
}
  return (
    <div className='container'>
        <h1>Our Teachers</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut <br /> neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta <br /> repudiandae in quas quibusdam ullam, illum sed veniam!</p>
<input type="text" onChange={(e)=>handleSeacrh(e.target.value)} placeholder='Search...' />
<div className='sorts'>
<button onClick={()=>handleSort()}>Sort by Name</button>
<button onClick={()=>handleSortt()}>Sort by Name</button>
</div>


<div className='teacherdata'>
{data.map((element)=>{
    return(
        <Link to={`/${element._id}`}>
        <div className='teachercard'>
<img src={element.img} alt="" />
        <h5>{element.name}</h5>
        <p>{element.job}</p>
        <p>{element.title}</p>
        </div>
        </Link>

        
    )
})}
</div>
    </div>
  )
}

export default Teachers