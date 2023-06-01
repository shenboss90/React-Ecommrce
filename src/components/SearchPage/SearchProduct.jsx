import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import Product from "../Products/product"
const SearchProduct = () => {
     const[products, setProduct]=useState([]);

     function fetchSearchProducts(e){
        e.preventDefault()
       router.push(`/SearchProduct/${searched}`)
      axios.get(`https://dummyjson.com/products/search?q=${searched}`)
      .then(response =>{
        // console.log('response' , response);
        setProduct(response.data.products)
     
      })

    }

  return (
    
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

export default SearchProduct