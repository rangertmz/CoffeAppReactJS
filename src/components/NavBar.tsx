import React from 'react'


const NavBar = () => {
  return (
    <div className="container-fluid p-0 nav-bar navs">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="/" className="navbar-brand px-lg-4 m-0">
                <h1 className="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4">
                    <a href="/" className="nav-item nav-link">Inicio</a>
                    <a href="about" className="nav-item nav-link">Conocenos</a>
                    <a href="service" className="nav-item nav-link">Servicios</a>
                    <a href="menu" className="nav-item nav-link">Menu</a>
                    <a href="reservation" className="nav-item nav-link">Reservaciones</a>
                    <a href="contact" className="nav-item nav-link">Contactanos</a>
                    <a href="login" className="nav-item nav-link">Iniciar Sesion</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar