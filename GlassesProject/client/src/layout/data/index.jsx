import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/products").then((data) => {
      setData(data.data);
    });
  }, []);
  return (
    <>
      <div className="word">
        <h1>HOT THIS WEEK</h1>
        <p>Luxe, lightweight, and made with the perfect blend of cashmer</p>
      </div>

      <div className="card">
        {data.map((element) => {
          return (
            <div>
              <Link to={`/${element.id}`}>
              <div>
                <img src={element.image} alt="" />     
                <div className="dataword">
                  <h5>{element.title}</h5>
                  <h5>{element.price}</h5>
                </div>
              </div>
              </Link>
             
            </div>
          );
        })}
      </div>
      <div className="databtn">
      <a href="#"><button className="shop">SHOP NOW</button>
</a> 
      </div>
 
    </>
  );
};

export default Data;
