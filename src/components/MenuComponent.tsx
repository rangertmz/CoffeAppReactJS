import menu1 from '../assets/img/menu-1.jpg';
import menu2 from '../assets/img/menu-2.jpg';
import '../assets/css/menu.css'

interface Props{
  id:string
}

const MenuComponent: React.FC<Props> = ({id}) => {
  return (
    <>
      <div className="menu-header" id={id}>
        <div className="menu-title">
          <h4 className="menu-title-text" style={{ letterSpacing: '5px' }}>
            Menu & Precios
          </h4>
          <h1 className="menu-title-subtitle">Precios Competitivos</h1>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-category-left">
          <h2 className="menu-category-title">Café Frío</h2>
          <div className="menu-item">
            <div className="menu-item-image">
              <img src={menu2} alt="Café Frío" />
            </div>
            <div className="menu-item-details">
              <h4 className="menu-item-name">Iced Caramel Macchiato</h4>
              <p className="menu-item-description">
                Café espresso servido sobre hielo con leche y jarabe de caramelo.
              </p>
              <h5 className="menu-item-price">$5.49</h5>
            </div>
          </div>
        </div>

        <div className="menu-category-right">
          <h2 className="menu-category-title">Café Caliente</h2>
          <div className="menu-item">
            <div className="menu-item-image">
              <img src={menu2} alt="Café Caliente" />
            </div>
            <div className="menu-item-details">
              <h4 className="menu-item-name">Café Latte</h4>
              <p className="menu-item-description">
                Café espresso con leche caliente y espuma de leche.
              </p>
              <h5 className="menu-item-price">$4.99</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuComponent