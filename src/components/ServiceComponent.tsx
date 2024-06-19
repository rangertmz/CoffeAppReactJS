import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";

const ServiceComponent = () => {
  const textStyle = {
    fontSize: 16.5,
    color: "black",
  };
  return (
    <div className='container-fluid pt-5'>
      <div className='container'>
        <div className='section-title'>
          <h4
            className='text-primary text-uppercase'
            style={{ letterSpacing: "5px" }}
          >
            Nuestros Servicios
          </h4>
          <h1 className='display-4'>Café fresco y orgánico.</h1>
        </div>
        <div className='row'>
          <div className='col-lg-6 mb-5'>
            <div className='row align-items-center'>
              <div className='col-sm-5'>
                <img className='img-fluid mb-3 mb-sm-0' src={service1} alt='' />
              </div>
              <div className='col-sm-7'>
                <h4>
                  <i className='fa fa-truck service-icon'></i>Entrega a
                  domicilio más rápida.
                </h4>
                <p className='m-0' style={textStyle}>
                  La cafetería "KOPPE" se enorgullece de ofrecer el servicio de
                  "Entrega a domicilio más rápida" en toda la ciudad.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-5'>
            <div className='row align-items-center'>
              <div className='col-sm-5'>
                <img className='img-fluid mb-3 mb-sm-0' src={service2} alt='' />
              </div>
              <div className='col-sm-7'>
                <h4>
                  <i className='fa fa-coffee service-icon'></i>Café en grano
                  fresco.
                </h4>
                <p className='m-0' style={textStyle}>
                  En nuestra cafetería, ofrecemos una amplia variedad de granos
                  de café, desde suaves y afrutados hasta fuertes y ahumados,
                  para satisfacer todos los gustos.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-5'>
            <div className='row align-items-center'>
              <div className='col-sm-5'>
                <img className='img-fluid mb-3 mb-sm-0' src={service3} alt='' />
              </div>
              <div className='col-sm-7'>
                <h4>
                  <i className='fa fa-award service-icon'></i>El mejor café de
                  calidad.
                </h4>
                <p className='m-0' style={textStyle}>
                  En nuestra cafetería, el café no es solo una bebida, es una
                  experiencia. Desde el aroma tentador hasta el sabor rico y
                  profundo, nos aseguramos de que cada taza te haga sentir como
                  si estuvieras bebiendo la perfección.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mb-5'>
            <div className='row align-items-center'>
              <div className='col-sm-5'>
                <img className='img-fluid mb-3 mb-sm-0' src={service4} alt='' />
              </div>
              <div className='col-sm-7'>
                <h4>
                  <i className='fa fa-table service-icon'></i>Reserva de mesa en
                  línea.
                </h4>
                <p className='m-0' style={textStyle}>
                  Nuestra cafetería, "El Oasis del Café", ofrece un servicio de
                  Reserva de Mesa en Línea para que nuestros clientes puedan
                  asegurarse de tener un lugar en nuestra popular cafetería.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
