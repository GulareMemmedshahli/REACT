import {  Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";

const Detail = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = useState();
  const [data2,setData2]=useState([])
  const [defaultimage, setDefault] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:8000/products/${id}`).then((data) => {
      setData(data.data);
    });

  }, []);
  const handleImage = (e) => {
    setImage(e.target.src);
    setDefault(false);
  };
  const handleImage2 = (e) => {
    setImage(e.target.src);
    setDefault(false);
  };
  const handleImage3 = (e) => {
    setImage(e.target.src);
    setDefault(false);
  };
  const handleImage4 = (e) => {
    // setImage(false);
    setImage(e.target.src);
    setDefault(false);
  };

  return (
    <>
      <div>
        <div className="detail">
          <div className="thumb">
            <div className="img1">
              <img onClick={(e) => handleImage(e)} src={data.image} alt="" />
              <img onClick={(e) => handleImage2(e)} src={data.image2} alt="" />
              <img onClick={(e) => handleImage3(e)} src={data.image3} alt="" />
              <img onClick={(e) => handleImage4(e)} src={data.image4} alt="" />
            </div>

            <div className="img2">
              <img src={defaultimage ? data.image : image} alt="" />
            </div>
          </div>

          <div className="dataword">
            <h1>{data.title}</h1>
            <h3>{data.price}</h3>
            <p>
              He garments labelled as Committed are products that have been
              produced using sustainable fibers or processes, reducing their
              environmental impact.
            </p>
            <div className="buttons">
              <button className="addto">ADD TO CARD</button>
              <div>
                <button className="buyit">BUY IT NOW</button>
              </div>
            </div>
            <div className="detailicon">
              <p>
                <i class="fa-solid fa-code-compare"></i>Add to Compare
              </p>
              <p onClick={() => setOpen(true)}>
                <i class="fa-solid fa-share-nodes"></i>
                Share
              </p>
            </div>
            <div>
            <p><i class="fa-solid fa-truck"></i>Estimated Delivery: 15 - 30 Jan, 2023</p>
            <p><i class="fa-brands fa-usps"></i>Free Shipping & Returns:
On all orders over $300</p>
            </div>
            <div className="bankcard">
              <img src="https://blueskytechmage.com/next_minimog/media/wysiwyg/product-trust-badge_1.png" alt="" />
<p>Guarantee safe & secure checkout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal2">
        <Modal
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={500}
          height={100}
        >
          <h5>Share</h5>
          <div className="micon">
            <a
              target="_blank"
              href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fblueskytechmage.com%252Fnext_minimog%252Fdemo_glasses_1%252Fthick-plastic-sunglasses.html&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/home/?status=https%3A%2F%2Fblueskytechmage.com%2Fnext_minimog%2Fdemo_glasses_1%2Fthick-plastic-sunglasses.html"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fblueskytechmage.com%2Fnext_minimog%2Fdemo_glasses_1%2Fthick-plastic-sunglasses.html"
            >
              {" "}
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a
              target="_blank"
              href="https://currents.google.com/up/?continue=https://currents.google.com/share?url%3Dhttps://blueskytechmage.com/next_minimog/demo_glasses_1/thick-plastic-sunglasses.html"
            >
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </Modal>
      </div>
      <div className="detailbottom">
        <div className="bottomimg">
          <img src={data.image} alt="" />
        </div>
        <div className="yazi">
          <h3>The Iconic Silhouette</h3>
          <div>
          <p>
            He garments labelled as Committed are products that have been
            produced using sustainable fibers or processes, reducing their
            environmental impact. Mango’s goal is to support the implementation
            of practices more committed to the environment, and therefore
            increase the number of sustainable garments in the collection.
          </p>
          </div>
         
          <ul>
            <h5>Infomation</h5>
            <li>Cutaway collar</li>
            <li>Front button fastening</li>
            <li>Chest patch pocket</li>
            <li>Long sleeves</li>
          </ul>
        </div>
      
      </div>

  
    </>
  );
};

export default Detail;
