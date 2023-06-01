import React from "react";
import "./FrontPage.css";
import Product from "../Products/product";

const FrontPage = ({productResult}) => {

  return (
    <div className="container-fluid">
       
       {
        productResult.length>0?(
          
            <div className="container">
            {
              (productResult.length >0 ) ?
           
              productResult.map((value, index)=>{
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
          
        ):(
          <>
            <div className="row">
        <div className="col-6">
          <div className="heading">
            <h2>Tackling Africa's Credibility Gap</h2>
            <div className="main-word">
              <p>
                Our innovation in Know-Your-Customer,Know your Employee and
                digital services provide businesses and individuals the
                confidence needed to make informed decisions
              </p>
            </div>

            <div className="but">
              <button className="main-button1">Get Started</button>
              <button className="main-button2">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div 
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="\src\components\images\pooja-chaudhary-bqnbKxiIGZI-unsplash.jpg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "400px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="\src\components\images\rayul-_M6gy9oHgII-unsplash.jpg"
                  className="d-block w-100"
                  style={{ height: "400px" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="\src\components\images\toa-heftiba-O3ymvT7Wf9U-unsplash.jpg"
                  style={{ height: "400px" }}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h6>Trusted by various African Companies</h6>
      </div>
      <div className=" container-fluid logo-container">
        <img
          src="\src\components\images\uba bank.png"
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        <img
          src="\src\components\images\union bank.png"
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        <img
          src="\src\components\images\afribank.jpeg"
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
        <img
          src="\src\components\images\unitybank.png"
          alt=""
          style={{ height: "60px", width: "60px" }}
        />
      </div>

      <div style={{}} className="div2">
        <h1 className="mt-5" style={{textAlign:'center'}}>Reliable End to End Verification Services</h1>
        <div className="cards">

          <div className="card m-5"  style={{ width: "" ,textAlign:'center' }}>
            <img src="\src\components\images\graphic2.jpg" className="card-img-top" alt="..." style={{height:'250px'}} />
            <div className="card-body mt-4">
              <h5 className="card-title">ID VERIFICATION</h5>
              <p className="card-text mt-5">
              Real-time KYC verification, biometric authentication and the ability to cross-check a persons identity with national databases
              </p>
              <a href="#" className="mt-5">
                Learn More
              </a>
            </div>
            </div>
            <div className="card m-5 " style={{ width: "" ,textAlign:'center' }}>
              <img src="\src\components\images\grahic1.jpeg" className="card-img-top" alt="..." style={{height:'250px'}}/>
              <div className="card-body mt-4">
                <h5 className="card-title">ADDRESS VERIFICATION</h5>
                <p className="card-text mt-5">
                The combination of our wide agent network and our 4D GIS service offers the fastest and most accurate physical address verification.
                </p>
                <a href="#" className="mt-5">
                  Learn More
                </a>
              </div>
            </div>
            <div className="card m-5" style={{ width: "", textAlign:'center' }}>
              <img src="\src\components\images\graphic3.jpg" className="card-img-top" alt="..." style={{height:'250px'}} />
              <div className="card-body mt-4">
                <h5 className="card-title">FINANCIAL VERIFICATION</h5>
                <p className="card-text mt-5">
                Our integrations enable you to verify and authenticate the financial information of your customers including bank accounts.
                </p>
                <a href="#" className="">
                  Learn More
                </a>
              </div>
            </div>
            </div>
        </div>
          </>
        )
       }


    
    </div>
  );
};

export default FrontPage;
