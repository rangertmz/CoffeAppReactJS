import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";
import { FaTruck, FaCoffee, FaAward, FaTable } from 'react-icons/fa';
import '../assets/css/service.css'

interface Props{
  id:string
}

const ServiceComponent: React.FC<Props> = ({id}) => {

  const services=[
    {
      icon: <FaTruck className="service-icon" />,
      title: 'Entrega a domicilio más rápida',
      description:
        'La cafetería "KOPPE" se enorgullece de ofrecer el servicio de "Entrega a domicilio más rápida" en toda la ciudad.',
      image: service1,
    },
    {
      icon: <FaCoffee className="service-icon" />,
      title: 'Café en grano fresco',
      description:
        'En nuestra cafetería, ofrecemos una amplia variedad de granos de café, desde suaves y afrutados hasta fuertes y ahumados, para satisfacer todos los gustos.',
      image: service2,
    },
    {
      icon: <FaAward className="service-icon" />,
      title: 'El mejor café de calidad',
      description:
        'En nuestra cafetería, el café no es solo una bebida, es una experiencia. Desde el aroma tentador hasta el sabor rico y profundo, nos aseguramos de que cada taza te haga sentir como si estuvieras bebiendo la perfección.',
      image: service3,
    },
    {
      icon: <FaTable className="service-icon" />,
      title: 'Reserva de mesa en línea',
      description:
        'Nuestra cafetería, "El Oasis del Café", ofrece un servicio de Reserva de Mesa en Línea para que nuestros clientes puedan asegurarse de tener un lugar en nuestra popular cafetería.',
      image: service4,
    },
  ]
  return (
    <div className="services-container" id={id}>
    <div className="services-content">
      <h2 className="services-title">Descubre Nuestros Servicios</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img className="service-image" src={service.image} alt={`Servicio ${index + 1}`} />
            <div className="service-details">
              <h3 className="service-title">
                {service.icon}{service.title}
              </h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ServiceComponent;
