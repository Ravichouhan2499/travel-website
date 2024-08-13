import React from 'react'
import Img1 from '../../Img/varanasi.jpg'
import Img2 from '../../Img/caro1.jpg'
import './Caro.css'


export default function Caro() {
  return (
   <div>
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src={Img1} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Avantika &amp; Vacations</h4>
              <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src={Img2} alt="Image" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h4 className="text-white text-uppercase mb-md-3">Tours &amp; Travel</h4>
              <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
              <a href className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>
  </div>
</div>

  )
}
