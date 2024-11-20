import React from 'react'
import './userFooter.css'

export default function UserFooter() {
  return (
    <div className='footerContainer'>
      <p>Makeover Solutions <span>Copyrights &copy; {new Date().getFullYear()}</span></p>
    </div>
  )
}
