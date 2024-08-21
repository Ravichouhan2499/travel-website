import React from 'react'
import { Link } from 'react-router-dom'
import './adminFooter.css'

export default function AdFooter() {
  return (
    <div className='footerContainer'>
      <p>Makeover Solutions <span>Copyrights &copy; {new Date().getFullYear()}</span></p>
    </div>
  )
}
