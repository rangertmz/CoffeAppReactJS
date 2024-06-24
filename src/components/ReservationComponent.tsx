import '../assets/css/reservation.css';
interface Props{
  id:string
}

const ReservationComponent: React.FC<Props>= ({id}) => {
  const personas = [
    { id: 1, personas: 1 },
    { id: 2, personas: 2 },
    { id: 3, personas: 3 },
    { id: 4, personas: 4 },
    { id: 5, personas: 5 },
    { id: 6, personas: 6 },
  ];
  return (
    <div className='reservation-container' id={id}>
      <div className='reservation-content'>
        <div className='reservation-overlay'>
          <div className='reservation-row'>
            <div className='reservation-col reservation-discount'>
              <div className='reservation-discount-content'>
                <div className='discount-text'>
                  <h1 className='discount-title'>30% de Descuento</h1>
                  <h1 className='discount-subtitle'>Para Reservas en Línea</h1>
                </div>
              </div>
            </div>
            <div className='reservation-col reservation-form-col'>
              <div className='reservation-form-container'>
                <h1 className='form-title'>Reserva Tu Mesa</h1>
                <form className='reservation-form'>
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
                    <label htmlFor='fecha' className='form-label'>
                      Fecha
                    </label>
                    <input
                      type='date'
                      className='form-input'
                      placeholder='Fecha'
                      required
                      name='fecha'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='hora' className='form-label'>
                      Hora
                    </label>
                    <input
                      type='time'
                      className='form-input'
                      placeholder='Hora'
                      required
                      name='hora'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='personas' className='form-label'>
                      Número de personas
                    </label>
                    <select name='personas' className='form-select'>
                      <option value='' disabled selected>
                        Seleccione el número de personas
                      </option>
                      {personas.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.personas}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='form-group'>
                    <button className='form-button' type='submit'>
                      Reservar Ahora
                    </button>
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

export default ReservationComponent;
