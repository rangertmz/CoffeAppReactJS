import React from 'react';
//import {} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './assets/css/style.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopBtn';

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
  };

  const showPageHeader = location.pathname !== '/';
  const namePage = routeNameMap[location.pathname] || '';

  return (
    <div>
      <NavBar/>
      {showPageHeader && <PageHeader namePage={namePage} />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
      <BackToTopButton/>
    </div>
  );
};

export default App;
