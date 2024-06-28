
import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/pageHeader.css'

type PageHeaderProps = {
    namePage: string;
  };

const PageHeader:React.FC<PageHeaderProps>=({namePage}) => {
  return (
      <div className="container-page-header">
            <div className="page-header-content" style={{minHeight:300, paddingTop:150, textAlign:'center',}}>
            <h1 className="page-header-title">{namePage}</h1>
            <div className="page-header-breadcrumbs">
            <Link className="page-header-link" to="/">Inicio</Link>
            <p className="page-header-linkoff"> / </p>
            <Link className="page-header-linkoff" to="#">{namePage}</Link>
            </div>
            
        </div>
    </div>
  )
}

export default PageHeader
