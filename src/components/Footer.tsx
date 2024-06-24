import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='footer-content'>
        <div className='footer-title'>
          <h4 className='footer-title-text' style={{ letterSpacing: "3px" }}>
            PONTE EN CONTACTO
          </h4>
          <p>
            <FaMapMarkerAlt /> 123 Street, New York, USA
          </p>
          <p>
            <FaPhoneAlt /> +012 345 67890
          </p>
          <p className=''>
            <FaEnvelope /> info@example.com
          </p>
        </div>
        <div className='footer-social'>
          <h4 className='footer-social-title' style={{ letterSpacing: "3px" }}>
            SIGUENOS
          </h4>
          <p>Siguenos en nuestras redes sociales.</p>
          <div className='footer-social-icons'>
            <Link className='footer-social-icon' to='#'>
              <FaTwitter />{" "}
            </Link>
            <Link className='footer-social-icon' to='#'>
              <FaFacebookF />{" "}
            </Link>
            <Link className='footer-social-icon' to='#'>
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
            <Link className='footer-social-icon' to='#'>
              <FaInstagram />{" "}
            </Link>
          </div>
        </div>
        <div className='footer-hours'>
          <h4 className='footer-hours-title' style={{ letterSpacing: "3px" }}>
            HORARIO DE APERTURA
          </h4>
          <div>
            <h6 className='footer-hours-text'>Lunes - Viernes</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className='footer-hours-text'>Sabado - Domingo</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
      </div>
      <div
        className='footer-copyright'
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <p className='footer-copyright-text'>
          Copyright &copy;{" "}
          <Link className='footer-copyright-link' to='#'>
            Domain
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
