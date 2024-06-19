const MenuComponent = () => {
  return (
    <>
      <div className='container-fluid py-5 text-center position-relative overlay-top overlay-bottom'>
        <div className='container'>
          <div className='section-title'>
            <h4
              className='text-primary text-uppercase'
              style={{letterSpacing:'5px'}}
            >
              Menu & Precios
            </h4>
            <h1 className='display-4'>Precios Competitivos</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h1 className="mb-5">Cafe Caliente</h1>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <img className="w-100 rounded-circle mb-3 mb-sm-0" src={"../assets/img/menu-1.jpg"}
                                    alt=""/>
                                <h5 className="menu-price">precio</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>nombre</h4>
                                <p className="m-0">descripcion</p>
                            </div>
                        </div>

                </div>
                <div className="col-lg-6">
                    <h1 className="mb-5">Cafe Frio</h1>
                        <div className="row align-items-center mb-5">
                            <div className="col-4 col-sm-3">
                                <img className="w-100 rounded-circle mb-3 mb-sm-0" src="{{ asset($item->archivo) }}"
                                    alt=""/>
                                <h5 className="menu-price">precio</h5>
                            </div>
                            <div className="col-8 col-sm-9">
                                <h4>nombre</h4>
                                <p className="m-0">descripcion</p>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default MenuComponent