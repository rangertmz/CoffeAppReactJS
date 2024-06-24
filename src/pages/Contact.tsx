import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-content'>
        <div className='contact-title'>
          <h4
            className='contact-title-text'
            style={{ letterSpacing: "5px" }}
          >
            Contactanos
          </h4>
          <h1 className='contact-title-subtitle'>Sientete libre de contactarnos</h1>
        </div>

        <div className='contact-info'>
          <div className='contact-info-content'>
            <div className='contact-info-group'>
                <FaMapMarkerAlt className="contact-info-icon" />
              <h4 className='contact-info-title'>Direccion</h4>
              <p>123 Street, New York, USA</p>
            </div>
            <div className='contact-info-group'>
                <FaPhoneAlt className="contact-info-icon" />
              <h4 className='contact-info-title'>Telefono</h4>
              <p>+012 345 6789</p>
            </div>
            <div className='contact-info-group'>
                <FaEnvelope className="contact-info-icon" />
              <h4 className='contact-info-title'>Email</h4>
              <p>info@example.com</p>
            </div>
          </div>

          <div className='contact-form'>
            <div className='contact-form-content'>
              <form method='post'>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='nombre'>Nombre</label>
                  <input
                    type='text'
                    className='contact-form-input'
                    id='nombre'
                    placeholder='Nombre'
                    name='nombre'
                  />
                  <p></p>
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='email'>Email</label>
                  <input
                    type='email'
                    className='contact-form-input'
                    id='email'
                    placeholder='Email'
                    name='email'
                  />
                  <p></p>
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='telefono'>Telefono</label>
                  <input
                    type='number'
                    className='contact-form-input'
                    id='subject'
                    placeholder='Telefono'
                    name='telefono'
                  />
                  <p></p>
                </div>
                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='mensaje'>Mensaje</label>
                  <textarea
                    className='contact-form-input-textarea'
                    id='message'
                    placeholder='Mensaje'
                    name='mensaje'
                  ></textarea>
                  <p></p>
                </div>
                <div>
                  <button
                    className='contact-form-button'
                    type='submit'
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
