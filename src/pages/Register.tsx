import { Link } from 'react-router-dom';
import '../assets/css/login.css';


const Register= () => {
 
  return (
    <div className='login-container'>
      <div className='register-content'>
        <div className='register-overlay'>
          <div className='login-row'>
            <div className='login-col login-discount'>
              <div className='login-discount-content'>
                <div className='login-text'>
                  <h1 className='login-title'> ¡Únete a nosotros! </h1>
                  <h1 className='login-subtitle'> Registrarte para continuar </h1>
                </div>
              </div>
            </div>
            <div className='login-col login-form-col'>
              <div className='login-form-container'>
                <h1 className='form-title'> Registrarse</h1>
                <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor='nombre' className='form-label'>
                      Nombre
                    </label>
                    <input
                      type='text'
                      className='form-input'
                      placeholder='Nombre'
                      required
                      name='nombre'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='username' className='form-label'>
                      Username
                    </label>
                    <input
                      type='text'
                      className='form-input'
                      placeholder='Username'
                      required
                      name='username'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-input'
                      placeholder='Email'
                      required
                      name='email'
                    />
                  </div>
                  <div className='form-group'>
                    <p className='form-error'>error</p>
                    </div>
                  <div className='form-group'>
                    <label htmlFor='contraseña' className='form-label'>
                      Contraseña
                    </label>
                    <input
                      type='password'
                      className='form-input'
                      placeholder='Contraseña'
                      required
                      name='contraseña'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='confirm-contraseña' className='form-label'>
                      Confirmar Contraseña
                    </label>
                    <input
                      type='password'
                      className='form-input'
                      placeholder='Contraseña'
                      required
                      name='confirm-contraseña'
                    />
                  </div>
                  <div className='form-group'>
                    <p className='form-error'>error</p>
                    </div>
                  <div className='form-group'>
                    <button className='form-button' type='submit'>
                      Registrarse
                    </button>
                  </div>
                  <div className='form-group'>
                    
                      <span className='form-text'>
                        Ya tienes una cuenta <Link to='/login' className='form-link'>Inicia Sesión Aqui </Link>
                      </span>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
