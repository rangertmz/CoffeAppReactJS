
const ReservationComponent = () =>{
    const personas =[{
        id:1,
        personas:1
    }]
    return(
        <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% de Descuento</h1>
                  <h1 className="text-white">Para Reservas en Linea</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center p-5" style={{ background: 'rgba(51, 33, 29, .8)' }}>
                <h1 className="text-white mb-4 mt-5">Reserva Tu Mesa</h1>
                <form className="mb-5">
                  <div className="form-group">
                    <label htmlFor="" className="text-white">Nombre</label>
                    <input type="text"
                      className="text-white form-control bg-transparent border-primary p-4"
                      placeholder="Nombre" required name="nombre" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="text-white">Email</label>
                    <input type="email"
                      className="form-control bg-transparent border-primary p-4 text-white"
                      placeholder="Email" required name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="text-white">Fecha</label>
                    <input type="date" name="fecha"
                      className="form-control bg-transparent border-primary p-4 text-white"
                      placeholder="Fecha" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="text-white">Hora</label>
                    <input type="time" name="hora"
                      className="form-control bg-transparent border-primary p-4 text-white"
                      placeholder="Hora" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="text-white">Numero de personas</label>
                    <select name="personas" className="custom-select border-primary px-4"
                      style={{ height: '49px' }}>
                      <option selected>Seleccione el numero de personas</option>
                      {personas.map(item => (
                        <option key={item.id} value={item.id}>{item.personas}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <button className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit">Reservar Ahora</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ReservationComponent