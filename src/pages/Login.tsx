import { Link } from 'react-router-dom';
import '../assets/css/login.css';


const Login= () => {
 
  return (
    <div className='login-container'>
      <div className='login-content'>
        <div className='login-overlay'>
          <div className='login-row'>
            <div className='login-col login-discount'>
              <div className='login-discount-content'>
                <div className='login-text'>
                  <h1 className='login-title'> ¡Bienvenido de nuevo!</h1>
                  <h1 className='login-subtitle'> Inicia Sesión para continuar </h1>
                </div>
              </div>
            </div>
            <div className='login-col login-form-col'>
              <div className='login-form-container'>
                <h1 className='form-title'> Iniciar Sesión</h1>
                <form className='login-form' action='/dashboard'>
                 
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
                    <p className='form-error'>error</p>
                    </div>
                  <div className='form-group'>
                    <button className='form-button' type='submit'>
                      Iniciar Sesión
                    </button>
                  </div>
                  <div className='form-group'>
                      <span className='form-text'>
                        No tienes una cuenta <Link to='/register' className='form-link'>Regístrate Aqui </Link>
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

export default Login;
