import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import "./index.scss"
const Adduser = () => {
    const formik = useFormik({
        initialValues: {
          img: '',
          name: '',
          title: '',
          description: '',
          price: '',
        },
        onSubmit: (values) => {
         axios.post("http://localhost:8000/user",values)
        },
      });
  return (
    <div className='datacard'>
         <form onSubmit={formik.handleSubmit} >
       <label htmlFor="img">Img Url</label>
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
       <label htmlFor="title">Title </label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="description">Description </label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
       <label htmlFor="price">Price </label>
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

export default Adduser