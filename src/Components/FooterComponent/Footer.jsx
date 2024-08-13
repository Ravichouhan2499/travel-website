import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
    <div className="container-fluid bg-dark text-white-50 py-4 px-sm-3 px-lg-5" style={{ marginTop: 90 }}>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-5">
          <h5 className="text-white text-uppercase mb-2" style={{ letterSpacing: 5 }}>Our Services</h5>
          <div className="d-flex flex-column">
            <Link className="text-white-50 mb-2" to="/" onClick={handleLinkClick}>
              <i className="fa fa-angle-right me-2" />Home
            </Link>
            <Link className="text-white-50 mb-2" to="/about" onClick={handleLinkClick}>
              <i className="fa fa-angle-right me-2" />About
            </Link>
            <Link className="text-white-50 mb-2" to="/destiny" onClick={handleLinkClick}>
              <i className="fa fa-angle-right me-2" />Destination
            </Link>
            <Link className="text-white-50 mb-2" to="/service" onClick={handleLinkClick}>
              <i className="fa fa-angle-right me-2" />Services
            </Link>
            <Link className="text-white-50 mb-2" to="/package" onClick={handleLinkClick}>
              <i className="fa fa-angle-right me-2" />Packages
            </Link>
            <Link className="text-white-50" to="/blog" onClick={handleLinkClick}>
              <i className="fa fa-angle-right me-2" />Blog
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-5">
          <h6 className="text-white text-uppercase mb-3" style={{ letterSpacing: 5 }}>Follow Us</h6>
          <div className="d-flex flex-wrap">
            <Link className="btn btn-outline-primary btn-square me-2 mb-2" to="#">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="btn btn-outline-primary btn-square me-2 mb-2" to="#">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="btn btn-outline-primary btn-square me-2 mb-2" to="#">
              <i className="fab fa-linkedin-in" />
            </Link>
            <Link className="btn btn-outline-primary btn-square mb-2" to="#">
              <i className="fab fa-instagram" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-5">
          <h6 className="text-white text-uppercase mb-3" style={{ letterSpacing: 5 }}>Newsletter</h6>
          <div className="input-group">
            <input type="text" className="form-control border-light " style={{ padding: '15px' , width:'50%' }} placeholder="Your Email" />
            <button className="btn btn-primary px-4">Sign Up</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-5">
          <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }}>Contact Us</h5>
          <p><i className="fa fa-map-marker-alt me-2" />Tulsi Nagar, Opposite Shani Mandir, Ramkola Road, Pradrauna Kushinagar</p>
          <p><i className="fa fa-phone-alt me-2" />+91 7068695511</p>
          <Link className="fa fa-envelope text-white" to='mailto:avantikavacations@gmail.com'>avantikavacations@gmail.com</Link>
        </div>
      </div>
    </div>

    <div className="container-fluid bg-dark text-white border-top py-2 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .1)' }}>
      <div className="row">
        <div className="col-lg-6 text-center text-md-start mb-3 mb-md-0">
          <p className="m-0 text-white-50">
            © 2024 <Link to="mailto:info@makeoversolution.in" className="text-white">info@makeoversolution.in</Link>. All Rights Reserved.
          </p>
        </div>
        <div className="col-lg-6 text-center text-md-end">
          <p className="m-0 text-white-50">
            Designed by <Link to="mailto:info@makeoversolution.in" className="text-white">Makeover Solutions</Link>
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}
