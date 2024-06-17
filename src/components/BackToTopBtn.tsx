import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Maneja el evento de scroll para mostrar u ocultar el botón
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
        setIsAnimatingOut(true); // Inicia la animación de salida
        setTimeout(() => {
            setIsAnimatingOut(false);
            setIsVisible(false);
        }, 500); // Tiempo de espera para que termine la animación de salida
    }
  };

  // Efecto para escuchar el scroll y actualizar la visibilidad del botón
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Maneja el clic en el botón para animar el scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Añade una animación suave al scroll
    });
  };
  const buttonAnimation = {
    animation: isVisible ? 'bounceInUp 1s ease' : isAnimatingOut ? 'bounceOutDown 1s ease' : '' ,
    width: 60,
    height: 60,
  };

  return (
    <>
      {isVisible && (
        <button 
        className={`back-to-to btn btn-lg btn-primary btn-lg-square`}
        style={buttonAnimation}
        onClick={scrollToTop}>
          <i className="fa fa-angle-double-up"></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
