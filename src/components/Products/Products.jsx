import React from 'react';
import Product from './product';
import "./Products.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

 function Products() {
    const[products, setProducts]=useState([]);
    function fetchProducts(){
    axios.get('https://dummyjson.com/products')
    .then(response =>{
      setProducts(response.data.products)
    })
  }
  useEffect(()=>{
    fetchProducts()
  }, [])
    // Javascript goes here
    

      return(
                // <div style={{display: 'flex' }}>
                <div className="container">
                  {
                    (products.length >0 ) ?
                 
                    products.map((value, index)=>{
                      return (
                        <div key={index}  className="product">
                        <Product  id= {value.id}  title={value.title} img={value.images[0]} price={value.price} discount={value.discountPrice} />
                       </ div>
                      )
                    }) :
                    <h2>Product Loading.....</h2>
                  }
                 {/* <Img/> */}
              </div>
      )
  
}

export default Products;