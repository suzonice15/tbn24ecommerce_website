import Head from 'next/head'
 
export default function Home() {
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
    <div className="row desktop-header-section px-4">

        <div className="col-2">
            <img  style={{height: "60px"}} className="img-fluid" src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/assets/logo.png?2021040919052920210101132750" />

        </div>   
        <div className="col-4 py-3 search">
            <form action="https://www.goandgift.com/search/" className="searchform" method="get">
                <div className="search-holder">
                    <input type="text" className="form-control" name="q" placeholder="Search.." autocomplete="off" />
                    <i className="fas fa-search" ></i>
                   
                </div>
            </form>
            
        </div>   
         
        <div className="col-6 py-3">
            <div className="menu-right-side-icon me-2">
                <a href=""><span className="me-1">us</span><i className="fas fa-globe"></i></a>
                <a href=""> <i className="fas fa-user"></i></a>
                <a href=""> <i className="far fa-chart-bar"></i></a>
                <a href=""> <i className="fas fa-cart-plus"></i></a>
             </div>  
    </div>
</div>
</div>


</header>

<nav>
<div className="container-fluid bg-dark text-white text-center desktop-nav-bar">
    <div className="row ">
         <div className="col-2">
             <p className="text-start text-uppercase fw-bold mt-2 ms-4 desktop-category-menu-icon" >Categories  <span  className="fw-bold mt-2 ms-4"><i className="fas fa-bars"></i></span> </p>
           

         </div>
         <div className="col-8 pt-3">
             
            <div className="d-inline p-2 w-100" >
                <i className="fas fa-check"></i> 1-2 Days Delivery
                
            </div>
            <div className="d-inline p-2 w-100" >
                        <i className="fas fa-check"></i> 1-2 Days Delivery
                        
           
                    </div>

                    <div className="d-inline p-2 w-100" >
                        <i className="fas fa-check"></i> 1-2 Days Delivery
                        
                    </div>
                    <div className="d-inline p-2 w-100" >
                        <i className="fas fa-check"></i> 1-2 Days Delivery
                        
                    </div>
        </div>

        </div>
   </div>


</nav>

<section className="slider-section">

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img width="100%" src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/234327/assets/slider-1.jpg?20210409190509" className="d-block w-100" alt="..." />
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
  <div className="row">
   
    <div className="col-6 col-md-6 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
    <div className="card" >
  <img  className="img-fluid" src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/63926/assets/highlight-2-image.jpg?20200722005117" className="card-img-top" alt="..." />
   <h2>Women</h2>
   <p>Be Enchanting</p>
   <a>See Collection</a>
</div>
    </div>

    <div className="col-6 col-md-6 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
    <div className="card" >
  <img className="img-fluid"  src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/63926/assets/highlight-2-image.jpg?20200722005117" className="card-img-top" alt="..." />
  <h2>Meb</h2>
   <p>Be Enchanting</p>
   <a>See Collection</a>
</div>
    </div>

    <div className="col-6 col-md-6 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
    <div className="card" >
  <img  className="img-fluid"  src="https://cdn.shoplightspeed.com/shops/637055/themes/10999/v/63926/assets/highlight-2-image.jpg?20200722005117" className="card-img-top" alt="..." />
  <h2>Women</h2>
   <p>Be Enchanting</p>
   <a>See Collection</a>
</div>
    </div>


  </div>
</div>
</section>


<section className="Featured-products ">
<div className="container-fluid  px-5 mt-5 ">
  <h2 className="">Featured productsView collection </h2>
  <div className="row mt-5">
   
    <div className="col-12 col-md-12 col-sm-12 col-lg-9 col-xl-9 col-xxl-9">
    <div className="row">

      <div className="col-12 col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
      <div className="card home-fesured-product mb-4">
  <img src="https://cdn.shoplightspeed.com/shops/637055/files/032457826/325x375x2/image.jpg" className="card-img-top p-2" alt="..." />
  <div className="card-body">
    <h6 className="text-left fw-bold">Some quick of the  content.</h6>
    <h5 className="text-center fw-bold">$ 500</h5>

    <div className="card-section d-flex " style={{float:"right"}}>
      <input type="text"  className="form-control me-1" style={{width:"45px"}} name="quantity" value="10"/>
      <button type="button"  className="btn btn-success btn-sm"><i className="fas fa-shopping-bag"></i></button>
    </div>

    
    <div className="card-hidden">
    <a href="https://www.goandgift.com/327965-silk.html" className="product-block-quick-quickshop"><i className="fas fa-search"></i></a>
   
    <a href="https://www.goandgift.com/compare/add/64018633/" data-compare="64018633" className="product-block-quick-compare"><i className="fas fa-chart-bar"></i></a>
    <a href="https://www.goandgift.com/compare/add/64018633/" data-compare="64018633" className="product-block-quick-stock"><i className="fas fa-check me-1"></i>In stock</a>

    </div>

  </div>
</div>
      </div>
 
     </div>
     

    </div>

    <div className="col-12 col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3">
     
     </div>

      

  </div>
</div>
</section>

</>

    
  )
}
