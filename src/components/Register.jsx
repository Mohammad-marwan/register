import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup';

export default function Register() {
  const schema = yup.object({
    email:yup.string().required().min(5).max(100).email(),
    password:yup.string().required()
})
    const formik = useFormik({
        initialValues:{
          userName:'',
            email: '',
            password: ''
        },onSubmit: async()=>{
          const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
          console.log(formik.values);  
         

        },validationSchema:schema

    })
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
    <div>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='userName' value={formik.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">userName</label>
  </div> 
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name='email' value={formik.email} onChange={formik.handleChange} />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
    name='password' value={formik.password} onChange={formik.handleChange}  />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <button type='submit' className="btn btn-dark my-3" >Register</button>
</div>

    </form>
      
    </>
  )
}
