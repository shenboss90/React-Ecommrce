import React, { useEffect, useState } from 'react';
import Post from './post'
import axios from 'axios'
import { Link } from 'react-router-dom';
import backimage from '../images/roton.jpg'
import '../blog/Blog.css'





const Blog = () => {
    const[allPage, setallPage]= useState([])

    function displayBlog(){
        axios.get('https://dummyjson.com/posts')
        .then( response => {
            setallPage(response.data.posts)
            // console.log('allPage', allPage);
        })

        }
        useEffect(()=>{
            displayBlog()
          }, [])


  return (
    
        <div className='container row'>
            <div className='col-7'>
                <h2>Verify Me Nigeria</h2>


            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" as={Link} to={'./Products'}>Home</Link>
        <a className="nav-link" >About</a>
      </div>
    </div>
  </div>
</nav>
            
            {
          (allPage.length>0)?
          allPage.map((value , index)=>{
            return (
                <div key={index}>
                  <Post title= {value.title} body= {value.body} id={value.id} />
                  <comment/>
                </div>
            )

          }): "Blog Loading"  
        
              }
            </div>
            <div className='col-5'>
              <h2>Register</h2>

              <form action="" id='contact' method='POST'>
                <label htmlFor="name">Full Name</label>
                <input name='name' type="text" placeholder='Enter name here....' />
                <label htmlFor="address">Address</label>
                <input name='address' type="text" placeholder='Enter address here....' />
                <label htmlFor="email">Email</label>
                <input name='email' type="email" placeholder='Enter email here....' />
                <label htmlFor="phone">Phone Number</label>
                <input name='phone' type="number" placeholder='Enter phoneNumber here....' />
                <label htmlFor="message">Phone Number</label>
                <textarea name="message" id="" cols="" rows="6" placeholder='Enter message' required></textarea>
                <button type=''>Submit</button>
              </form>
            </div>
        </div>
        
          
  ) 
}

export default Blog