import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import "./index.scss"
import axios from 'axios';
import {Helmet} from "react-helmet";
const SignupSchema = Yup.object().shape({
  img: Yup.string()
    .min(2, 'Qisadir!')
    .max(100, 'Too Long!')
    .required('Required'),
    name: Yup.string()
    .min(2, ' Qisadir!')
    .max(50, 'Too Long!')
    .required('Required'),
    job: Yup.string()
    .min(2, 'Qisadir')
    .max(50, 'Too Long!')
    .required('Required'),
    title: Yup.string()
    .min(2, 'Qisadir')
    .max(50, 'Too Long!')
    .required('Required'),

 
});

const Add = () => {
  return (

    <div className='add'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
       <h1>Message Us</h1>
      <Formik
       initialValues={{
        img: '',
        name: '',
        job: '',
        title: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={(values,{resetForm}) => {
        axios.post("http://localhost:8000/user",values)
        resetForm()
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
          <h4>Url Img</h4>
           <Field name="img" />
           {errors.img && touched.img ? (
             <div>{errors.img} </div>
           ) : null}
           <h4>Name</h4>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <h4>Job</h4>
           <Field name="job"/>
           {errors.job && touched.job ? <div>{errors.job}</div> : null}
           <h4>Title</h4>
           <Field name="title"/>
           {errors.title && touched.title ? <div>{errors.title}</div> : null}
         <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Add