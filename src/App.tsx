import React from 'react';
//import {} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopBtn';
import Service from './pages/Service';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeAdmin from './pages/Admin/Index';

type RouteNameMap = {
  [key: string]: string;
};

const App = () =>{
  return(
    <Router>
      <Main/>
    </Router>
  )
}

const Main = () => {
  const location = useLocation();

  const routeNameMap:RouteNameMap = {
    '/about': 'Conócenos',
    '/service': 'Servicios',
    '/menu': 'Menú',
    '/reservation': 'Reservaciones',
    '/contact': 'Contáctanos',
    '/login': 'Iniciar sesión',
    '/register': 'Registrarse',
    '/dashboard': 'Panel de control',
  };
  
  const excludeRoutes = ['/login', '/register', '/dashboard'];
  const excludeNavBar = ['/dashboard'];
  const excludePageHeader = ['/','/dashboard'];
  const showNavBar = !excludeNavBar.includes(location.pathname);
  const showPageHeader = !excludePageHeader.includes(location.pathname);
  const showFooter = !excludeRoutes.includes(location.pathname);
  const namePage = routeNameMap[location.pathname] || '';

  return (
    <div>
      <ScrollToTop/>
      {showNavBar && <NavBar/>}
      {showPageHeader && <PageHeader namePage={namePage} />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<HomeAdmin/>} />


      </Routes>
      {showFooter && <Footer/>}
      <BackToTopButton/>
    </div>
  );
};

export default App;
