import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Glassie from "./glassie";
import { Modal } from "antd";
import axios from "axios";
import "../../index.css"
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Post List
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Grid
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Grid With Sidebar
      </a>
    ),
  },
];
const items2 = [
  {
    key: "1",
    label: <Link to="/about">About</Link>,
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        FAQs
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        404 Page
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Contact Us
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Find A Store
      </a>
    ),
  },
];

const items3 = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Products Layout
      </a>
    ),
  },
];

const items4 = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Home
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Megastore
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Megamog
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Supergrear
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Active Wear Store
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Furniture Store
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Case Phone Store
      </a>
    ),
  },
  {
    key: "8",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Socks Store
      </a>
    ),
  },
  {
    key: "9",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Bedding Store
      </a>
    ),
  },
  {
    key: "10",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Sneaker Store
      </a>
    ),
  },
  {
    key: "11",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Jewelry Store
      </a>
    ),
  },
  {
    key: "12",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Bra Store
      </a>
    ),
  },
];

const items5 = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Home
      </a>
    ),
  },
];
const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);
  const [data2, setData2] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/products").then((data) => {
      setData2(data.data);
      // console.log("data",data.data);

    });
  }, []);
// console.log("console",data2);
const  handleSearch=(value)=>{
  axios.get("http://localhost:8000/products").then((data) => {
let search=data.data.filter((e)=>e.title.toLowerCase().includes(value.toLowerCase()))
setData2(search)
console.log(search);
})

}
  return (
    <>
    <div>
      <div className="header">
        {/* <h1>GLASSIE</h1> */}
        <i onClick={showModal} class="fa-solid fa-bars"></i>
        <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Dropdown
            menu={{
              items: items4,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/demo">DEMO</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items: items5,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/shop">SHOP</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items: items3,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/products">PRODUCTS</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/blog">BLOG</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items: items2,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/page">PAGE</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
      </Modal>
        <NavLink to="/">{<Glassie />}</NavLink>
        <div className="hisse2">
          <Dropdown
            menu={{
              items: items4,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/demo">DEMO</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items: items5,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/shop">SHOP</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items: items3,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/products">PRODUCTS</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/blog">BLOG</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Dropdown
            menu={{
              items: items2,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <NavLink to="/page">PAGE</NavLink>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="icons">
          <i
            onClick={() => setOpen(true)}
            class="fa-solid fa-magnifying-glass"
          ></i>
          <i class="fa-solid fa-user"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>

      </div>

    </div>



<div className="modal">
<Modal
centered
open={open}
onOk={() => setOpen(false)}
onCancel={() => setOpen(false)}
width={2000}
height={3000}
>
<div className="modalheader">
  <NavLink to="/">{<Glassie />}</NavLink>
  <div className="modalsearch">
    <input className="searchinpt" type="text" onChange={(e)=>handleSearch(e.target.value)} />
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div className="datamodal">
    {data2.map((element)=>{
      return(
        <div>
        <Link to={`/${element.id}`}>
        <div className="modaldata">
          <img className="dataimg" src={element.image} alt="" />     
          
            <h5>{element.title}</h5>
            <h5>{element.price}</h5>
         
        </div>
        </Link>
       {/* <h1>{element.title}</h1> */}
      </div>
      )
    })}

  </div>
</div>
</Modal>
</div>
</>
  );
};

export default Header;
