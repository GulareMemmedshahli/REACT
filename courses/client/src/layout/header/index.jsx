import { Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
     Blog
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
     Blog Details 
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    Element
      </a>
    ),
  },]
const Header = () => {

  return (
    <div className='header'>
      <img src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png.webp" alt="" />
      <div className='link'>
      <Link to="/">Home</Link>
      <Link to="/addcourse">Add Course</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Dropdown menu={{ items }}>
  <a onClick={(e) => e.preventDefault()}>
    <Space>
    <Link to="/blog">Blog</Link>
    </Space>
  </a>
</Dropdown>
        <Link to="/contact">Contact</Link>
        <button className='join'>Join</button>
        <button className='login'>Log In</button>
      </div>
     
    </div>
  )
}

export default Header
