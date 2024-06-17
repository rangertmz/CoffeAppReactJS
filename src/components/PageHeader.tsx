import React from 'react'

type PageHeaderProps = {
    namePage: string;
  };

const PageHeader:React.FC<PageHeaderProps>=({namePage}) => {
  return (
      <div className="d-flex flex-column align-items-center justify-content-center pt-0" >
            <div className="container-fluid page-header mb-5 position-relative overlay-bottom" style={{minHeight:500, paddingTop:180, textAlign:'center'}}>
            <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{namePage}</h1>
            <div className="d-inline-flex mb-lg-5">
                <p className="m-0 text-white"><a className="text-white" href="/">Inicio</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">{namePage}</p>
            </div>
        </div>
    </div>
  )
}

export default PageHeader
