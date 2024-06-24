import React, { useState, useEffect } from 'react';
import {FaAngleDoubleUp} from 'react-icons/fa'

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
    const scrollStep = -window.scrollY / (500 / 15); // Controla la velocidad de scroll (menor es más rápido)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Controla la frecuencia de actualización del scroll
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
        className={`back-to-to`}
        style={buttonAnimation}
        onClick={scrollToTop}>
          <FaAngleDoubleUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
