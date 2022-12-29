import React from 'react'
import "./index.scss"
import axios from "axios"
import { useFormik } from 'formik';
import { useRef } from 'react';
const Blog = () => {
  const inputRef=useRef()
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      author: '',
    },
    onSubmit: (values) => {

      values.author=inputRef.current.value;
      axios.post("http://localhost:8000/blogs",values)
      
      // console.log(values);
    },
  });
  return (

    <div className='blog'>
      <form  onSubmit={formik.handleSubmit}>
      <h1>Add a New Blog</h1>
      <label htmlFor="title">Blog Title</label><br />
      <input type="text" id='title' name='title' value={formik.values.title} onChange={formik.handleChange}/><br />
      <label htmlFor="body">Blog body</label><br />
      <input type="text" id='body' name='body' value={formik.values.body} onChange={formik.handleChange} /><br />
      <label htmlFor="title" >Blog author</label><br />
      <select name="author" id="author" ref={inputRef} >
        <option value="Qurban muellim">Qurban muellim</option>
        <option value="Kenan muellim">Kanan muellim</option>
        <option value="Gulare">Gulare</option>
        <option value="Eli">Eli</option>
      </select><br />
      <button  type="submit">Add Blog</button>
      </form>
    </div>
  )
}

export default Blog