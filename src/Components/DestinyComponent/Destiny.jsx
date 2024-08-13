import React from 'react'
import img from '../../Img/Somanath_Temple.jpg'
import img1 from '../../Img/trimbakeshwar-mandir.jpg'
import img2 from '../../Img/bhimashankar.jpg'
import img3 from '../../Img/grishneswar.jpg'
import img4 from '../../Img/nageshwar.jpeg'
import img5 from '../../Img/baidyanathTemple.jpg'

export default function Destiny() {
  return (
  <div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destination</h6>
      <h1>Explore Top Destination</h1>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={img} alt />
          <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">Somnath Temple</h5>
            <span>Gujrat</span>
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={img1}  style={{height:'240px'}}alt />
          <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">Trimbakeshwar Temple</h5>
            <span>Maharashtra</span>
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={img2} style={{height:'240px'}} alt />
          <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">BhimaShankar Temple</h5>
            <span>Pune</span>
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={img3}  alt />
          <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">Grishneshwar Temple</h5>
            <span>Aurangabad</span>
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={img4} style={{height:'260px'}} alt />
          <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">Nageshwar Temple</h5>
            <span>Gujrat</span>
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="destination-item position-relative overflow-hidden mb-2">
          <img className="img-fluid" src={img5} style={{height:'260px'}} alt />
          <a className="destination-overlay text-white text-decoration-none" href>
            <h5 className="text-white">Badiyanath Temple</h5>
            <span>Jharkhand</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
