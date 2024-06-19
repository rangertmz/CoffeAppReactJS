import React from 'react'
import img from '../assets/img/carousel-2.jpg'
import AboutComponent from '../components/AboutComponent'
import BackToTopButton from '../components/BackToTopBtn'
import ServiceComponent from '../components/ServiceComponent'
import MenuComponent from '../components/MenuComponent'
import ReservationComponent from '../components/ReservationComponent'


const Home = () => {
  return (
    <>
    <div className="container-fluid p-0 mb-5 home">
        <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={img} alt="bg"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0 h1">HEMOS ESTADO SIRVIENDO</h2>
                        <h1 className="display-1 text-white m-0 h2">CAFE</h1>
                        <h2 className="text-white m-0 h3">* DESDE 1950 *</h2>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
   
    <AboutComponent/>

    <ServiceComponent/>

    <MenuComponent/>

    <ReservationComponent/>
    
    </>
  )
}

export default Home