import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import '../assets/css/nav.css';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', text: 'Inicio' },
        { to: '/about', text: 'Conócenos' },
        { to: '/service', text: 'Servicios' },
        { to: '/menu', text: 'Menú' },
        { to: '/reservation', text: 'Reservaciones' },
        { to: '/contact', text: 'Contáctanos' },
        { to: '/login', text: 'Iniciar Sesión' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`container-nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <Link to="/" className="nav-title">
                    <h1 className={`nav-logo ${scrolled ? 'scrolled' : ''}`}>KOPPEE</h1>
                </Link>
                <div className="nav-links">
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.to} className={`nav-item ${scrolled ? 'scrolled' : ''}`}>
                            {link.text}
                        </Link>
                    ))}
                </div>
                <span className={`nav-btn ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                    <GiHamburgerMenu className={`nav-btn-burger ${scrolled ? 'scrolled' : ''}`} />
                </span>
                <div className={`nav-links-sidebar ${menuOpen ? 'open' : ''}`}>
                    <span className="nav-btn-close" onClick={toggleMenu}>
                        <FaTimes />
                    </span>
                    <div className="nav-links-container">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.to} className={`nav-item ${scrolled ? 'scrolled' : ''}`} onClick={toggleMenu}>
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
