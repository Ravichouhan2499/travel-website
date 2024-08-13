import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Img/sitelogo2.jpg'
import './navbar.css'

export default function Navbar() {

  const handleLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
  <div>
   <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-4 py-lg-0 pl-3">
          <Link to="/" className="navbar-brand">
            <img src={img} alt="Brand" style={{ width: '150px', height: '65px' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navv" id="navbarCollapse">
            <div className="navbar-nav ">
              <Link to="/" className="nav-item nav-link" onClick={handleLinkClick}>Home</Link>
              <Link to="/about" className="nav-item nav-link" onClick={handleLinkClick}>About</Link>
              <Link to="/service" className="nav-item nav-link" onClick={handleLinkClick}>Services</Link>
              <Link to="/package" className="nav-item nav-link" onClick={handleLinkClick}>Packages</Link>
              <Link to="/destination" className="nav-item nav-link" onClick={handleLinkClick}>Destination</Link>
              <Link to="/contact" className="nav-item nav-link" onClick={handleLinkClick}>Contact</Link>



              {/* Uncomment if you need a dropdown */}
              {/* <div className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="blog.html">Blog Grid</Link></li>
                  <li><Link className="dropdown-item" to="single.html">Blog Detail</Link></li>
                  <li><Link className="dropdown-item" to="destination.html">Destination</Link></li>
                  <li><Link className="dropdown-item" to="guide.html">Travel Guides</Link></li>
                  <li><Link className="dropdown-item" to="testimonial.html">Testimonial</Link></li>
                </ul>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
</div>

  )
}
