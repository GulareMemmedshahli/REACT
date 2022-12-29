import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import "./index.scss"
const Detail = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    let Base_URL = `http://localhost:8000/blogs/${id}`;
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(Base_URL).then((data) => {
        setData (data.data);
      });
    }, []);
  
    // data.map((e) => console.log(e));
  return (
    <div>

 <div className='card1'>
 <h1>{data.title}</h1>
<h2>{data.author}</h2>
<p>{data.body}</p>
<button onClick={()=>{axios.delete(Base_URL)
navigate("/")}}>Delete</button>
 </div>

       
     
    </div>
  )
}

export default Detail