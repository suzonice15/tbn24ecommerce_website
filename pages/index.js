import Head from 'next/head'
import { Swiper, SwiperSlide,Autoplay } from 'swiper/react';
import {useState,useEffect } from 'react'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

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
  

  const [sweepSlider, setSweepSlider] = useState(3)

  useEffect(()=>{

    const width=window.innerWidth 
    if(width< 576){
       setSweepSlider(1)
    } else if(width > 576 && width < 992)  {
      setSweepSlider(2)
    }
   })
  return (
     <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

      </Head>

<header>
<div className="container-fluid">
    <div className="row desktop-header-section  px-4">

        <div className="col-lg-2 col-xl-2 col-xxl-2">
            <img  style={{height: "60px"}} className="img-fluid" src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/assets/logo.png?2021040919052920210101132750" />

        </div>   
        <div className="col-lg-4 col-xl-4 col-xxl-4 py-3 search">
            <form action="https://www.goandgift.com/search/" className="searchform" method="get">
                <div className="search-holder">
                    <input type="text" className="form-control" name="q" placeholder="Search.." autoComplete="off" />
                    <i className="fas fa-search" ></i>
                   
                </div>
            </form>
            
        </div>   
         
        <div className="col-lg-6 col-xl-6 col-xxl-6 py-3">
            <div className="menu-right-side-icon me-2">
           
                <a href=""><span className="me-1">us</span><i className="fas fa-globe"></i></a>
                <a href=""> <i className="fas fa-user"></i></a>
                <a href=""> <i className="far fa-chart-bar"></i></a>
                <a href=""> <i className="fas fa-cart-plus"></i></a>
             </div>  
    </div>
</div>

</div> 

<div className="container-fluid">
<div className="row mobile-header-section   d-lg-none d-xl-none d-xxl-none px-4">

<div className="col-3 py-3">
<i className="fas fa-bars fs-5" ></i>
<i className="fas fa-search ms-3 fs-5" ></i>
</div>   
<div className="col-7 text-center py-2">
<img  style={{height: "50px"}} className="img-fluid" src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/assets/logo.png?2021040919052920210101132750" />

</div>   
 
<div className="col-2 py-3">
    <div className="menu-right-side-icon me-2">
   
               
        <a href=""> <i className="fas fa-cart-plus"></i></a>
     </div>  
</div>
</div>

</div>
 

</header>



 


<div className="container-fluid bg-dark text-white  desktop-nav-bar">
 <div className="row ">
         <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-md-none d-lg-block d-xl-block d-xxl-block">
             <p className="text-start text-uppercase fw-bold mt-2 ms-4 desktop-category-menu-icon" >Categories  <span  className="fw-bold mt-2 ms-4"><i className="fas fa-bars"></i></span> </p>
             <div className="desktop-main-menu">
             <ul>
         <li >
          <a href="">  <img className="me-3" src="https://cdn.shoplightspeed.com/shops/637055/files/21496590/35x35x1/image.jpg" />Men    <span><i className="fa fa-angle-right" ></i></span> </a>
         
          <ul>
            <p>Men</p>
           <li>  <a href=""> Shirt</a></li>
           <li>  <a href=""> Shooe</a></li>
           <li>  <a href=""> Lungi</a></li>


          </ul>
          
          </li>
            <li>  <a href="">  <img className="me-3" src="https://cdn.shoplightspeed.com/shops/637055/files/21496590/35x35x1/image.jpg" />Women   <span><i className="fa fa-angle-right" ></i></span> </a></li>
          <li> 
             <a href=""> <img className="me-3" src="https://cdn.shoplightspeed.com/shops/637055/files/21496590/35x35x1/image.jpg" /> Clutch Bag   <span><i className="fa fa-angle-right" ></i></span> 
             </a>
          <ul>
            <p>Men</p>
           <li>  <a href=""> Shirt</a></li>
           <li>  <a href=""> Shooe</a></li>
           <li>  <a href=""> Lungi</a></li>


          </ul>
          
          </li>
          
        </ul>
        </div>
         </div>
         <div className="col-12 col-lg-9 col-xl-9 col-xxl-9 text-center pt-3 swiper-section">
             
           
         
                    <Swiper
      spaceBetween={50}
      slidesPerView={sweepSlider}
      onSlideChange={() =>console.log("asi") }
      onSwiper={(swiper) => console.log(swiper)}
      Autoplay={false}
    >
             <SwiperSlide>           
             <p> <i className="fas fa-check"></i> 1-2 Days Delivery</p>                
             </SwiperSlide>
             <SwiperSlide>           
             <p> <i className="fas fa-check"></i> 1-2 Days Delivery</p>                
             </SwiperSlide>

             <SwiperSlide>           
             <p> <i className="fas fa-check"></i> 1-2 Days Delivery</p>                
             </SwiperSlide>
             <SwiperSlide>           
             <p> <i className="fas fa-check"></i> 1-2 Days Delivery</p>                
             </SwiperSlide>
             <SwiperSlide>           
             <p> <i className="fas fa-check"></i> 1-2 Days Delivery</p>                
             </SwiperSlide>
             <SwiperSlide>           
             <p> <i className="fas fa-check"></i> 1-2 Days Delivery</p>                
             </SwiperSlide>


           
      
     
    </Swiper>
        </div>
        
        </div>
   </div>


 


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

      <div   className="col-12 top-category-section col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 ">
      <div    className="mb-4 single-top-category-section " style={{border:"none"}}>

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

index <4 ?

      <div   className="col-12   col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 ">
      <div    className=" button-brand-section border "  >

  <img  src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNTU3NjZiMTk1YTNmLTAzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==" className="img-fluid  p-3" alt="..." />
  
</div>
      </div>
      :null 
    
    ))}

       
     
    </div>
</div>


</section>


<footer className="text-white footer pt-5" style={{background:"#222222",color:"#cfcfcf"}}> 
<div className="container-fluid px-5">
   <div className="row  justify-content-center">
     <div className="col-md-12 col-12 col-lg-6 col-xl-6 col-xxl-6">
       <h3>GoandGift.com</h3>
       <p>Get Inspiring Look</p>
       <p className="info"><i className="fas fa-map-marker-alt"></i> 37-17 57th Street  
          11377<br/>
          Woodside NY
        </p>
        <p className="info"><i className="fa fa-phone me-2"></i> +1 917 268 5555</p>
        <p className="info"><i className="fa fa-envelope me-2"></i>support@goandgift.com</p>
        <div className="socials"><ul><li><a href="https://www.facebook.com/GoAndGiftUSA/" target="_blank" className="social-fb"><i className="fab fa-facebook-f"></i></a></li><li><a href="https://twitter.com/goandgift" target="_blank" className="social-twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a></li><li><a href="https://www.youtube.com/channel/UCKOO4Vkx3I37Jh7S03BfzAA/featured?view_as=subscriber" target="_blank" className="social-yt"><i className="fab fa-youtube" aria-hidden="true"></i></a></li><li><a href="https://www.instagram.com/goandgift2020/?hl=en" target="_blank" className="social-insta"><i className="fab fa-instagram" aria-hidden="true"></i></a></li><li><a href="https://www.pinterest.com/goandgift/" target="_blank" className="social-pinterest"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></li></ul></div>

     </div>

     <div className="col-md-12 col-12 col-lg-3 col-xl-3 col-xxl-3">
     <h3>Information</h3>

     <ul><li><a href="https://www.goandgift.com/service/about/" title="About us">About us</a></li><li><a href="https://www.goandgift.com/service/general-terms-conditions/" title="General terms &amp; conditions">General terms &amp; conditions</a></li><li><a href="https://www.goandgift.com/service/shipping-returns/" title="Shipping &amp; returns">Shipping &amp; returns</a></li><li><a href="https://www.goandgift.com/service/" title="Customer support">Customer support</a></li><li><a href="https://www.goandgift.com/service/privacy-policy/" title="Privacy policy">Privacy policy</a></li><li><a href="https://www.goandgift.com/service/payment-methods/" title="Payment methods">Payment methods</a></li><li><a href="https://www.goandgift.com/service/sizechart/" title="Size Chart">Size Chart</a></li></ul>


       </div>

       <div className="col-md-12 col-12 col-lg-3 col-xl-3 col-xxl-3">
     <h3>My account</h3>

     <ul><li><a href="https://www.goandgift.com/account/information/" title="Account information">Account information</a></li><li><a href="https://www.goandgift.com/account/orders/" title="My orders">My orders</a></li><li><a href="https://www.goandgift.com/account/wishlist/" title="My wishlist">My wishlist</a></li><li><a href="https://www.goandgift.com/compare/" title="Compare">Compare</a></li><li><a href="https://www.goandgift.com/collection/" title="All products">All products</a></li></ul>

       </div>
 
</div>
<div className="row ">

<div className="col-md-12 col-12 col-lg-3 col-xl-3 col-xxl-3 ">
</div>
  
<div className="col-md-12 col-12 col-lg-6 col-xl-6 col-xxl-6 ">

<div className="footer-bottom gray-bg ">
  <div className="payment-icons-holder">
    <a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="American Express" className="payment-icons light icon-payment-americanexpress"></a>
    <a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="Credit Card" className="payment-icons light icon-payment-creditcard">
      </a><a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="Dinersclub" className="payment-icons light icon-payment-dinersclub"></a><a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="Discover Card" className="payment-icons light icon-payment-discover"></a>
      <a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="JCB" className="payment-icons light icon-payment-jcb"></a><a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="MasterCard" className="payment-icons light icon-payment-mastercard"></a>
      <a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="PayPal" className="payment-icons light icon-payment-paypal"></a>
      <a target="_blank" href="https://www.goandgift.com/service/payment-methods/" title="Visa" className="payment-icons light icon-payment-visa"></a>
      </div>
      <div className="copyright"><p>
© Copyright 2021 GoandGift.com - Powered by      
<a href="http://www.lightspeedhq.com" title="Lightspeed" target="_blank">Lightspeed</a>  
             -  Theme by <a href="https://www.dyvelopment.com/en/" title="dyvelopment" target="_blank">Dyvelopment</a></p>
 </div>
</div> 
</div>


<div className="col-md-12 col-12 col-lg-3 col-xl-3 col-xxl-3 ">
</div>




</div>
</div>



</footer>

</>

    
  )
}
