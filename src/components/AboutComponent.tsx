import React from 'react'
import about from '../assets/img/about.png'

const AboutComponent = () =>{

  return (
    <>
    <div className="container-fluid py-5 about">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{letterSpacing:'5px'}}>Sobre Nosotros</h4>
                <h1 className="display-4">Sirviendo desde 1950</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 py-0 py-lg-5">
                    <h1 className="mb-3">Nuestra Historia</h1>
                    <p>La cafetería "KOPPE" se hizo famosa por su delicioso café tostado y su ambiente acogedor y hogareño.
                        Los clientes a menudo regresaban por la cálida bienvenida de su personal amable y servicial.

                    </p>
                    <a href="about" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Leer Mas</a>
                </div>
                
                <div className="col-lg-4 py-5 py-lg-0" style={{minHeight:'500px'}}>
                    <div className="position-relative h-100"> 
                        <img className="position-absolute w-100 h-100" src={about} style={{objectFit:'cover'}} alt=''/>
                    </div>
                </div>
                <div className="col-lg-4 py-0 py-lg-5">
                    <h1 className="mb-3">Nuestra Vision</h1>
                    <p>En mi visión, la cafetería "KOPPE" es un lugar acogedor y moderno, decorado con paredes de ladrillo
                        expuesto y muebles de madera rústica. El aroma del café tostado y horneado inunda el espacio,
                        atrayendo a los clientes a disfrutar de su café de la mañana o una taza de té por la tarde.

                    </p>

                    <a href="about" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Leer Mas</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutComponent
