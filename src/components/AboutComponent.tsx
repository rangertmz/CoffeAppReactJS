import React from 'react'
import about from '../assets/img/about.png'
import { Link, useLocation } from 'react-router-dom'
import '../assets/css/about.css'

interface Props{
    id:string
}

const AboutComponent: React.FC<Props> = ({id}) =>{

    const location = useLocation()
    const pathname = location.pathname || 'about'
    const isAbout = pathname ? '/about' : '#about'

  return (
    <>
    <div className="about-container" id={id}>
        <div className="about-content">
            <div className="about-content-header">
                <h4 className="about-header-title" style={{letterSpacing:'5px'}}>Sobre Nosotros</h4>
                <h1 className="about-header-subtitle">Sirviendo desde 1950</h1>
            </div>
            <div className="about-content-body">
                <div className="about-content-body-left">
                    <h1 className="about-content-body-title">Nuestra Historia</h1>
                    <p>La cafetería "KOPPE" se hizo famosa por su delicioso café tostado y su ambiente acogedor y hogareño.
                        Los clientes a menudo regresaban por la cálida bienvenida de su personal amable y servicial.

                    </p>
                    <Link to={isAbout} className="about-content-body-link">Leer Mas</Link>
                </div>

                <div className="about-content-body-img">
                    <div className="about-content-body-img-container">
                        <img className="about-img" src={about} alt=''/>
                    </div>
                </div>

                <div className="about-content-body-right">
                    <h1 className="about-content-body-title">Nuestra Vision</h1>
                    <p>En mi visión, la cafetería "KOPPE" es un lugar acogedor y moderno, decorado con paredes de ladrillo
                        expuesto y muebles de madera rústica. El aroma del café tostado y horneado inunda el espacio,
                        atrayendo a los clientes a disfrutar de su café de la mañana o una taza de té por la tarde.

                    </p>

                    <Link to={isAbout} className="about-content-body-link">Leer Mas</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutComponent
