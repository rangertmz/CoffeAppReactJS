import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
    <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-4 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing:'3px'}}>PONTE EN CONTACTO</h4>
            <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
            <p className="m-0"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing:'3px'}}>Siguenos</h4>
            <p>Siguenos en nuestras redes sociales.</p>
            <div className="d-flex justify-content-start">
                <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing:'3px'}}>HORARIO DE APERTURA</h4>
            <div>
                <h6 className="text-white text-uppercase">Lunes - Viernes</h6>
                <p>8.00 AM - 8.00 PM</p>
                <h6 className="text-white text-uppercase">Sabado - Domingo</h6>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        
    </div>
    <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{borderColor:'rgba(256, 256, 256, .1) !important'}}>
        <p className="mb-2 text-white">Copyright &copy; <a className="font-weight-bold" href="#">Domain</a>. All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
