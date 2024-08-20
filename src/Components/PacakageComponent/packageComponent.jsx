import React from 'react'
import img from '../../Img/jyotirling.jpg'
import img1 from '../../Img/somnath.jpg'
import img2 from '../../Img/vaishnovdevo.jpg'
import img3 from '../../Img/goldentempl.jpg'
import img4 from '../../Img/khatu.jpg'
import img5 from '../../Img/kedarnath.jpg'

import { FaRupeeSign } from 'react-icons/fa'

export default function PackageComponent() {
  return (
   <div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Packages</h6>
      <h1>Pefect Tour Packages</h1>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={img} style={{height:'210px', width:'100%'}}  alt />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Religious Place</small>
              <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />9 days</small>
              <small className="m-0"><i className="fa fa-user text-primary mr-2" />1 person</small>
            </div>
            <a className="h5 text-decoration-none" href>Jyotirling Darshan</a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.9 <small>(999)</small></h6>
                <h5 className="m-0"><FaRupeeSign />27350</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={img1} style={{height:'210px', width:'100%'}} alt />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Gujrat</small>
              <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />10 days</small>
              <small className="m-0"><i className="fa fa-user text-primary mr-2" />1 Person</small>
            </div>
            <a className="h5 text-decoration-none" href>Somnath , Dwarka </a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.8 <small>(999)</small></h6>
                <h5 className="m-0"><FaRupeeSign />28350 </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={img2} style={{height:'210px', width:'100%'}} alt />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Kashmir</small>
              <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" /> 9 days</small>
              <small className="m-0"><i className="fa fa-user text-primary mr-2" />1 Person</small>
            </div>
            <a className="h5 text-decoration-none" href>Vaishnav Devi Mandir, katra</a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                <h5 className="m-0"><FaRupeeSign />24000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={img3} style={{height:'210px', width:'100%'}}  alt />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Amritsar</small>
              <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />8 days</small>
              <small className="m-0"><i className="fa fa-user text-primary mr-2" />1 Person</small>
            </div>
            <a className="h5 text-decoration-none" href>Golden Temple Amritsar </a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                <h5 className="m-0"><FaRupeeSign />17550</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={img4} style={{height:'210px', width:'100%'}}  alt />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Rajasthan</small>
              <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />9 days</small>
              <small className="m-0"><i className="fa fa-user text-primary mr-2" />1 Person</small>
            </div>
            <a className="h5 text-decoration-none" href>Khatu Shyam Mandir </a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                <h5 className="m-0"><FaRupeeSign />18450</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={img5} style={{height:'210px', width:'100%'}} alt />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Uttarakhand</small>
              <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />11 days</small>
              <small className="m-0"><i className="fa fa-user text-primary mr-2" />1 Person</small>
            </div>
            <a className="h5 text-decoration-none" href>Kedarnath & Amarnath</a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                <h5 className="m-0"><FaRupeeSign />21550</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
