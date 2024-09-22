import React from 'react'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import Detils from './components/Detils.jsx'
import Register from './components/Register.jsx'
import User from './components/User.jsx'
import Login from './components/Login.jsx'
import { Routes,Route } from 'react-router-dom'


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/Products' element={<Products />} ></Route>
      <Route path='/Detils/:ProID' element={<Detils />} ></Route>
      <Route path='/Register' element={<Register />} ></Route>
      <Route path='/User' element={<User />} ></Route>
      <Route path='/Login' element={<Login />} ></Route>
    </Routes>
    
      
    </>
  )
}
