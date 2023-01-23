import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Data = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
axios.get("http://localhost:8000/user").then((response)=>{
    setData(response.data)
})
    },[])
   const handleSearch=(value)=>{
    axios.get("http://localhost:8000/user").then((response)=>{
        let search=response.data.filter((data)=>
        data.name.toLowerCase().includes(value.toLowerCase())
        )
        setData(search)

})
   }

   const handleSort=()=>{
    axios.get("http://localhost:8000/user").then((response)=>{
        let sort=response.data.sort((a,b)=>(a.price-b.price))
        setData(sort)
    })

   }

   const handleSorting=()=>{
    axios.get("http://localhost:8000/user").then((response)=>{
        let sort=response.data.sort((a,b)=>(b.name>a.name ?-1:1))
        setData(sort)
    })
   }


// const handleSorting=()=>{
//         axios.get("http://localhost:8000/user").then((response)=>{
//             let sort=response.data.sort((a,b)=>(b.name>a.name ?-1:1))
//             if(data!=sort){
//                 setData(sort)
//             }if(data==sort){
//                 axios.get("http://localhost:8000/user").then((response)=>{
//                     setData(response.data)
//                 })
//             }
//         })
//        }
  return (
    <div className='umumi' >
        <h2>Happy Customers</h2>
        <div className='sortandsearch'>
        <input type="text" onChange={(e)=>handleSearch(e.target.value)} />
        <button onClick={()=>handleSort()}>Sort</button>
        <button onClick={()=>handleSorting()}>Sort by name</button>

        </div>
   
        <div className='customer'>
{data.map((element)=>{
    return(
        <div className='data'>
            <Link to={`/${element._id}`}>
            <img src={element.img} alt="" />
        <div className='datasag'>
            <h5>{element.name}</h5>
            <h5>{element.title}</h5>
            <p>{element.description}</p>
            <p>Price:{element.price}</p>
        </div>
            </Link>
      
    </div>
    )
})}
        </div>
    </div>
  )
}

export default Data