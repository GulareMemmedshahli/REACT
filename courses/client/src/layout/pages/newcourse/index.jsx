import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import "./index.scss"
const Newcourse = () => {
    const formik = useFormik({
    initialValues: {
        img:"",
        name: '',
        title: '',
        body: '',
        price:"",
      },
      onSubmit: (values) => {
        axios.post("http://localhost:8000/courses",values)
      },
    });
  return (
    <div className='newcourse'>
        <h1>Post New Course</h1>
       <form onSubmit={formik.handleSubmit}>
       <label htmlFor="img">Image Url</label>
       <input
         id="img"
         name="img"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.img}
       />
       <label htmlFor="name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <label htmlFor="email">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="email">Body</label>
       <input
         id="body"
         name="body"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.body}
       />
       <label htmlFor="email">Price</label>
       <input
         id="price"
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default Newcourse
