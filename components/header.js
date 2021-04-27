import react,{useState,useCallback ,useEffect } from 'react'
import { Swiper, SwiperSlide,Autoplay } from 'swiper/react';
import Head from 'next/head'

const Header=()=>{

    
  const [sweepSlider, setSweepSlider] = useState(3)
  const [menuShow, setMenuShow] = useState(false)


  useEffect(()=>{

    const width=window.innerWidth 
    if(width< 576){
       setSweepSlider(1)
    } else if(width > 576 && width < 992)  {
      setSweepSlider(2)
    }
   })
    
   const menuShowfunction = useCallback(() => setMenuShow(o => !o), [setMenuShow]);

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
             <p onClick={menuShowfunction}  className="text-start text-uppercase fw-bold mt-2 ms-4 desktop-category-menu-icon" >Categories  <span  className="fw-bold mt-2 ms-4">
             {menuShow ? 
             <i   className="fas fa-times fs-5"></i>
                 :<i   className="fas fa-bars fs-5"></i>
                 }
                 </span> </p>
            
            {menuShow ?   <div className="desktop-main-menu">
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
 : null}
            


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
   </>
    )



}
export default Header