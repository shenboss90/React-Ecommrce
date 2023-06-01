import React, { useState ,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import Products from "../Products/Products";
import FrontPage from "../frontPage/FrontPage";
import SingleProduct from "../SingleProduct/singleProduct";
import './home.css';
import SearchProduct from "../SearchPage/searchProduct";
import axios from "axios";
import Blog from "../blog/Blog";
import BlogSinglePage from "../BlogSinglePage/BlogSinglePage";


function Home() {
     const [searched, setsearched]=useState('')
     const[products, setProduct]=useState([]);

    
     function handleSearched(event){
      // const cart = [
      //   { id: 1, quantity: 2, size: 'm', color: 'black', name: 'test', image: 'google.com' },
      //   { id: 1, quantity: 2, size: 'm', color: 'black', name: 'test', image: 'google.com' },
      //   { id: 1, quantity: 2, size: 'm', color: 'black', name: 'test', image: 'google.com' }
      // ]
      // localStorage.setItem('cart', JSON.stringify(cart));
      // const cartFromStorage = JSON.parse(localStorage.getItem('cart'));
         setsearched(event.target.value)
     }
    //  console.log(searched);
  function fetchSearchProducts(e){
          e.preventDefault()

        axios.get(`https://dummyjson.com/products/search?q=${searched}`)
        .then(response =>{
          // console.log('response' , response);
          setProduct(response.data.products)
       
        })

      }
      // useEffect(()=>{
      //   fetchSearchProducts()
      // }, [])
      console.log(products)
  return (
    <BrowserRouter>
    <div>
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/FrontPage"><img onClick={() => {
          const currentLocation = location.href; 
          if (currentLocation.includes('FrontPage')) {
            location.reload();
          }
        }} src = ".\src\components\images\verifymelogo.jpeg" alt="logo" className="logo-image" /></Navbar.Brand>
        <form className=" d-flex ">
        <input className="form-control ms-5" type="search" onChange={handleSearched} placeholder="Search Product" aria-label="Search"  />
        <button className="btn btn-outline-success" onClick={fetchSearchProducts}>Search</button>
      </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavDropdown title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Identity Verification</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Client Verification</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Guarantor Verification</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Staff Verification</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Webinars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/Products">Product</Nav.Link>
            <Nav.Link href="#link">Company</Nav.Link>
            <Nav.Link as={Link} to='/Blog'>Blog</Nav.Link>
            <Button variant="warning" className="nav-button">LogIn</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
      <Route path="/FrontPage" element = {<FrontPage productResult={products}  />}/>  
        <Route path="/Products" element = {<Products/>}/>
       
        <Route path="/details/:ProductId" element={<SingleProduct />} />
        <Route path="/BlogSinglePage/:postId" element={<BlogSinglePage />} />
        {/* <Route path="/SearchProduct/:searchParam" element={<SearchProduct/>} /> */}
        <Route path = '/Blog' element= {<Blog/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default Home;