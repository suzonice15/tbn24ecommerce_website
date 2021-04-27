import Head from 'next/head'
import {useState,useEffect } from 'react'
import  Header from '../components/header'
import Footer from '../components/footer';

import { Swiper, SwiperSlide,Autoplay } from 'swiper/react';

// Import Swiper styles
// import React,{useState} from 'react'
const fesuredProduct=[
  {
    alu:"",
  },
  {
    alu:"",
  },
  {
    alu:"",
  }, {
    alu:"",
  }, {
    alu:"",
  }, {
    alu:"",
  }, {
    alu:"",
  }, 
  {
    alu:"",
  },  {
    alu:"",
  },  
]

const rightProduct=[
  
  {
    alu:"",
  },
  {
    alu:"",
  },
  {
    alu:"",
  },
  {
    alu:"",
  },
  {
    alu:"",
  }, {
    alu:"",
  }, {
    alu:"",
  }, {
    alu:"",
  } 
  , 
     
]

 
export default function Home() {
  

  return (
     <>
     

<Header/>

 


<section className="slider-section">

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img    src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/234327/assets/slider-1.jpg?20210409190509" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/234327/assets/slider-1.jpg?20210409190509" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/234327/assets/slider-1.jpg?20210409190509" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

</section>
<section className="slider-bottom-section">
<div className="container-fluid  px-5 mt-4">
  <div className="row " >
   
         
{fesuredProduct.map((i,index)=>(

index <4 ?
  <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-3 col-xxl-4 mb-2 text-center">
    
    <div className="single-slider-bottom-section text-center"  >
    <div className="card" >
      <img src="/slider_buttom.jpg" />
    <div className="slider-bottom-body">
      <div className="slider-bottom-content">
   <h4 className="">Women</h4>
   <p>Be Enchanting</p>
   <a>See Collection</a>
   </div>
   </div>

</div>
</div>

    </div>
     :null 
    
     ))}
 

  </div>
</div>
</section>


<section className="Featured-products">
<div className="container-fluid  px-5">
  <h4 className="Featured-products-heading">Featured products <span className="ms-2"><a>View collection</a></span> </h4>
  <div className="row mt-4  ">
   
    <div className="col-12 col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
    <div className="row">

      
{fesuredProduct.map(()=>(

      <div className="col-6 col-md-6 col-sm-6 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card home-fesured-product mb-4" style={{border:"none"}}>
  <img src="https://cdn.shoplightspeed.com/shops/637055/files/032457826/325x375x2/image.jpg" className="card-img-top p-2" alt="..." />
  <div className="card-body">
    <h6 className="text-justify fw-normal">Benarashi katan sharee of tangail</h6>
    <h6 className="text-center fw-normal">E-70451</h6>
    <h5 className="text-center fw-normal">$ 500</h5>

    <div className="card-section d-flex " style={{float:"right"}}>
      <input type="text"  className="form-control me-1" style={{width:"45px"}} name="quantity" onChange={()=>  10} value="10"/>
       <button type="button" ><i className="fas fa-shopping-bag"></i></button>
    </div>

    
    <div className="card-hidden">
    <a href="https://www.goandgift.com/327965-silk.html" className="product-block-quick-quickshop"><i className="fas fa-search"></i></a>
   
    <a href="https://www.goandgift.com/compare/add/64018633/" data-compare="64018633" className="product-block-quick-compare"><i className="fas fa-chart-bar"></i></a>
    <a href="https://www.goandgift.com/compare/add/64018633/" data-compare="64018633" className="product-block-quick-stock"><i className="fas fa-check me-1"></i>In stock</a>

    </div>

  </div>
</div>
      </div>
    
    ))}

       
     </div>
     

    </div>

    <div className="col-12 col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
    <div className="card home-fesured-product-right-first mb-4" style={{border:"none"}}>
  <img src="https://cdn.shoplightspeed.com/shops/637055/files/23104234/325x375x2/image.jpg" className="card-img-top p-2" alt="..." />
  <div className="card-body  text-center">
    <h6 className="text-justify fw-normal mt-2">Benarashi katan sharee of tangail</h6>
    <h6 className="text-center fw-normal mt-2">E-70451</h6>
    <h5 className="text-center fw-normal mt-2" >$ 500</h5>
    <a href="https://www.goandgift.com/45-slim-fit-a.html" style={{background:"#6b4e48",color:"#fff !important",border:"none"}} className="btn btn-info mt-4">View product</a>
  
  </div>
</div>
<p className="mt-5">Popular products <span><a href=""  className="me-4">View all</a></span> </p>
{rightProduct.map(()=>(
<div className="row align-items-center single-home-right-product">
  <div className="col-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
    <img className="img-fluid" alt="product" src="https://cdn.shoplightspeed.com/shops/637055/files/23475247/65x75x2/mohini-vol-61004.jpg" />

  </div>
  <div className="col-6 col-md-4 col-lg-6 col-xl-6 col-xxl-6 ">
   <p className="fw-normal">Benarashi katan sharee </p>
  </div>
  <div className="col-3 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
    <div className="d-flex">
    <p className="fw-normal"> $109.99 </p>
   <div className="view">
     <a href="https://www.goandgift.com/mohini-vol-61004.html" className="ms-2 home-right-view" data-json="https://www.goandgift.com/mohini-vol-61004.html?format=json" data-pid="31180702"><i className="fas fa-search"></i></a></div>
     </div>
   </div>
</div>
    ))}

   
      
     
     </div>

      

  </div>
</div>
</section>

<div className="container-fluid  px-5">
  <h4 className="Featured-products-heading">New products <span className="ms-2"><a>View collection</a></span> </h4>
  <div className="row mt-4  ">
   
   

      
{fesuredProduct.map((i,index)=>(

index <4 ?

      <div className="col-6 col-md-4 col-sm-6 col-lg-3 col-xl-3 col-xxl-3">
      <div className="card home-fesured-product mb-4" style={{border:"none"}}>
  <img src="https://cdn.shoplightspeed.com/shops/637055/files/032457826/325x375x2/image.jpg" className="card-img-top p-2" alt="..." />
  <div className="card-body">
    <h6 className="text-justify fw-normal">Benarashi katan sharee of tangail</h6>
    <h6 className="text-center fw-normal">E-70451</h6>
    <h5 className="text-center fw-normal">$ 500</h5>

    <div className="card-section d-flex " style={{float:"right"}}>
      <input type="text"  className="form-control me-1" style={{width:"45px"}} name="quantity" onChange={()=>  10} value="10"/>
       <button type="button" ><i className="fas fa-shopping-bag"></i></button>
    </div>

    
    <div className="card-hidden">
    <a href="https://www.goandgift.com/327965-silk.html" className="product-block-quick-quickshop"><i className="fas fa-search"></i></a>
   
    <a href="https://www.goandgift.com/compare/add/64018633/" data-compare="64018633" className="product-block-quick-compare"><i className="fas fa-chart-bar"></i></a>
    <a href="https://www.goandgift.com/compare/add/64018633/" data-compare="64018633" className="product-block-quick-stock"><i className="fas fa-check me-1"></i>In stock</a>

    </div>

  </div>
</div>
      </div>
      :null 
    
    ))}

       
     
    </div>
</div>


<div className="container-fluid  px-5">
  <h4 className="Featured-products-headingd">Our top categories </h4>
  <div className="row mt-4  ">
   
   

      
{fesuredProduct.map((i,index)=>(

index <4 ?

      <div   className="col-6 top-category-section col-md-4 col-sm-6 col-lg-3 col-xl-3 col-xxl-3 ">
      <div    className="mb-1 single-top-category-section " style={{border:"none"}}>

  <img  src="https://cdn.shoplightspeed.com/shops/637055/files/21652607/400x400x1/shirt.jpg" className="img-fluid" alt="..." />
  <div className="top-category-body">
    <a href="" className="text-decoration-none">Shirt</a> 
  </div>
</div>
      </div>
      :null 
    
    ))}

       
     
    </div>
</div>


 

 



<section className="brand-section"> 
<div className="container-fluid mt-5 mb-4 px-5">
  <h4 className="Featured-products-heading">Our brands </h4>
  <div className="row  ">
   
   

      
{fesuredProduct.map((i,index)=>(

index <6 ?

      <div   className="col-6   col-md-6 col-sm-6 col-lg-2 col-xl-2 col-xxl-1 p-2">
      <div    className=" button-brand-section border "  >

  <img  src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNTU3NjZiMTk1YTNmLTAzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==" className="img-fluid  p-3" alt="..." />
  
</div>
      </div>
      :null 
    
    ))}

       
     
    </div>
</div>


</section>
<Footer />

</>

    
  )
}
