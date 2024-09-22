import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';

export default function Login() {
    const schema = yup.object({
        email:yup.string().required().min(5).max(100).email(),
        password:yup.string().required()
    })
    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },onSubmit:async()=>{
            const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values);
            console.log(data);
            if(data.message == 'success'){
              localStorage.setItem('userdata', data.token);
            }
        },validationSchema:schema
    })




  return (
    <form onSubmit={formik.handleSubmit }>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
     name='email' value={formik.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
    {formik.errors.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
     name='password' value={formik.password} onChange={formik.handleChange} />
    <label htmlFor="floatingPassword">Password</label>
    {formik.errors.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}
  </div>
  <button type='submit' className='btn btn-dark my-3'>Login</button>
</form>

  )
}
