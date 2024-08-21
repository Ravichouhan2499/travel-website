import React from 'react'
import './admindashboard.css'
import AdService from '../adService/adServices'
import ViewServices from '../adService/viewAdService'
import ViewTopDestiny from '../topDestiny/viewAdDestiny'
import ViewBlog from '../blog/viewBlog'
import ViewPackages from '../adPackages/viewAdPackages'

export default function Admindashboard() {
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
