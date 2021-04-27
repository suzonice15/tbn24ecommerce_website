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

 



 

 


 
<Footer />
</>

    
  )
}
