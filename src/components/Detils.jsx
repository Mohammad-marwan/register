import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Detils() {
    const [Product,setProduct] = useState({})
    const {ProID} = useParams();
    const getProducts = async() =>{
        const {data} = await axios.get(`https://dummyjson.com/products/${ProID}`);
        setProduct(data);
    }
    useEffect(()=>{
        getProducts();
    }, [])
  return (
    <div>
      <h2>{Product.title}</h2>
    </div>
  )
}
