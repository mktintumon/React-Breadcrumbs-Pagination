import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {
    const {pathname} = useLocation();
    const pathnames = pathname.split("/").filter((x)=>x); // removes the blank element part

    let breadcrumbsPath = "";
    console.log(pathnames);

  return (
    <div className='breadcrumbs'>
        <Link to="/">Home</Link>
        {
            pathnames.map((name , idx)=>{
                breadcrumbsPath += `/${name}`
                const isCurrentPage = idx === pathnames.length-1;

                return isCurrentPage ? (<span key={breadcrumbsPath}>{" / "} {name}</span>) : (
                    <span key={breadcrumbsPath}>{" / "}<Link to={breadcrumbsPath}>{name}</Link></span>
                )
            })
        }
    </div>
  )
}

export default Breadcrumbs