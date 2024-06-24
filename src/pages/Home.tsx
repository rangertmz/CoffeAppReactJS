import React, {useEffect} from 'react'
import img from '../assets/img/carousel-2.jpg'
import AboutComponent from '../components/AboutComponent'
import ServiceComponent from '../components/ServiceComponent'
import MenuComponent from '../components/MenuComponent'
import ReservationComponent from '../components/ReservationComponent'
import '../assets/css/home.css'


const Home = () => {
  
  
  return (
    <>
    <div className="home-container">
        <div className=" home-content">
                    <img className="home-content-img" src={img} alt="bg"/>
                    <div className="home-content-overlay"></div>
                    <div className="home-content-text">
                        <h2 className="home-content-title">HEMOS ESTADO SIRVIENDO</h2>
                        <h1 className="home-content-subtitle">CAFE</h1>
                        <h2 className="home-content-subtitle2">* DESDE 1950 *</h2>
                    </div>
                </div>
    </div>
   
    <AboutComponent id="about"/>

    <ServiceComponent id="service" />

    <MenuComponent id="menu"/>

    <ReservationComponent id="reservation"/>
    
    </>
  )
}

export default Home