import React, { useEffect } from 'react'
import './admindashboard.css'
import AdService from '../adService/adServices'
import ViewServices from '../adService/viewAdService'
import ViewTopDestiny from '../topDestiny/viewAdDestiny'
import ViewBlog from '../blog/viewBlog'
import ViewPackages from '../adPackages/viewAdPackages'
import { useLocation } from 'react-router-dom'

export default function Admindashboard() {

  const location = useLocation();

  useEffect(() => {
      if (location.pathname === '/admin/') {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '/css/bootstrap.min.css';
          document.head.appendChild(link);

          return () => {
              document.head.removeChild(link);
          };
      }
  }, [location]);



  return (
    <div className='dash' style={{ padding: '0 15px' }}>
    <div className='section' style={{ marginBottom: '30px' }}>
      <ViewServices/>
    </div>
    <hr/>
    
    <div className='section' style={{ marginBottom: '30px' }}>
      <ViewTopDestiny/>
    </div>
    <hr/>
    
    <div className='section' style={{ marginBottom: '30px' }}>
      <ViewBlog/>
    </div>
    <hr/>
    
    <div className='section' style={{ marginBottom: '50px' }}>
      <ViewPackages/>
      
    </div>
  </div>
  
  )
}
