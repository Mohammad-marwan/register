import React, { useEffect  , useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {
    const [Products, setProducts] = useState([]);
    const getProducts = async()=>{
        const {data} = await axios.get(`https://dummyjson.com/products`);
        const result = data.products;
        setProducts(result);
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div className="container">
        <div className="row">
            {Products.map(pro=>
            <div className="col-lg-3">
                <h2>{pro.title}</h2>
                <img src={pro.thumbnail} />
                <div className="card-footer">
                    <Link className='btn btn-dark' to={`/Detils/${pro.id}`} >detils</Link>
                </div>

            </div>
            
            )}
        </div>
    </div>
  )
}
