import React from 'react'
import img from '../../Img/banner.jpg'

export default function TopBar() {
  return (
   <div>
  <div className="container-fluid bg-light pt-3 pb-6 d-none d-lg-block">
    <div className="container">
      <img src={img}  style={{width:'100%', height:'3   00px' }}/>
    </div>
  </div>
</div>

  )
}
