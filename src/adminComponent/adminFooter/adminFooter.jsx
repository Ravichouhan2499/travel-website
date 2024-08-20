import React from 'react'
import { Link } from 'react-router-dom'
import './footer1.css'

export default function AdFooter() {
  return (
    <div className='footerContainer'>
      <p>Avantika Vacation Admin Panel <span>Copyrights &copy; {new Date().getFullYear()}</span></p>
    
    </div>
  )
}
