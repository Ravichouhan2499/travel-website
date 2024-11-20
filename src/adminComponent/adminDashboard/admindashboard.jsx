import React, { useEffect } from 'react'
import './admindashboard.css'
import ViewServices from '../adService/viewAdService'
import ViewTopDestiny from '../topDestiny/viewAdDestiny'
import ViewBlog from '../blog/viewBlog'
import ViewPackages from '../adPackages/viewAdPackages'
import ViewAgents from '../agentComponent/viewAgentDetails'

export default function Admindashboard() {
  

  return (<>
     {/* <h1>Welcome Admin Dashboard</h1> */}
    <div className='dash' style={{ padding: '0 15px' }}>

<div className='section' style={{ marginBottom: '30px' }}>
    <ViewAgents/>
     
    </div>
    <hr/>

    <div className='section' style={{ marginBottom: '30px' }}>
    <ViewPackages/>
     
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
    <ViewServices/>
      
    </div>
  </div>
  </>
  
  )
}
