import React from 'react'
import Img from '../../Img/abbout.jpg'
import Img3 from '../../Img/goldenTemple.jpg'
import Img2 from '../../Img/vaishnavdevi.jpg'

export default function About() {
  return (
    <div>
<div className="container-fluid py-5">
  <div className="container pt-2">
    <div className="row">
      <div className="col-lg-6" style={{minHeight: 400}}>
        <div className="position-relative h-50">
          <img className="position-absolute w-100 h-10" src={Img} style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-lg-6 pt-5 pb-lg-5">
        <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
          <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>About Us</h6>
          <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
          <p>From the holy peaks of <b> Vaishno Devi</b> to the golden glow of the <b>Golden Temple</b> our tour packages offer the best experiences within your budget </p>
          <div className="row mb-4">
            <div className="col-6">
              <img className="img-fluid" src={Img2} alt />
            </div>
            <div className="col-6">
              <img className="img-fluid" src={Img3} style={{width:'200px'}} />
            </div>
          </div>
          <a href className="btn btn-primary mt-1">Book Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
