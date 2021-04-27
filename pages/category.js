import Head from 'next/head'
import { Swiper, SwiperSlide,Autoplay } from 'swiper/react';
import {useState,useEffect } from 'react'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';


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
 

 
export default function category() {
  
 
  return (
     <>
   
   <Header></Header>


 
<div className="container-fluid  px-5">
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link href='/'><a className="text-decoration-none">Home</a></Link></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<div className="row">
<div className="col-md-6 col-12 col-sm-6 col-lg-6 col-xl-6  col-xxl-6 d-none d-sm-block  d-md-block d-lg-block d-xl-block d-xxl-block">
       <div class="main-category-image-left" >
           <img   className="img-fluid" src="https://cdn.shoplightspeed.com/shops/637055/files/21496590/750x450x1/image.jpg"/>
       </div>
       </div>

       <div className="col-md-6 col-12 col-sm-6 col-lg-6 col-xl-6  col-xxl-6">
       <div class="main-category-right-category-name text-center" >
           <h2 className="fw-bold fs-2">Shirt</h2>
        </div>
       </div>
</div>
   <div className="row mt-4  ">

       
   
{fesuredProduct.map((i,index)=>(

index <6 ?

      <div   className="col-6 main-category-section col-md-4 col-sm-6 col-lg-3 col-xl-3 col-xxl-3 ">
      <div    className="mb-1 image-holder" >

          
  <img  src="https://cdn.shoplightspeed.com/shops/637055/files/21652607/400x400x1/shirt.jpg" className="img-fluid" alt="..." />
  
  </div>
  <div className="top-main-category-body ">
    <a href="" className="text-decoration-none fw-bold text-white fs-5">Shirt</a> 
  </div>

      </div>
      :null 
    
    ))}

       
     
    </div>
</div>
 
<Footer />
</>

    
  )
}
