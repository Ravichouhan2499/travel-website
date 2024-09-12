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

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 

  return (
  <div>
   <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-2" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-2 py-lg-0 pl-0 fixed-top ">
          <Link to="/" className="navbar-brand">&nbsp; &nbsp; &nbsp; 
            <img src={img} alt="Brand"  onClick={handleLinkClick} style={{ width: '150px', height: '65px'}} className='imglogo' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse navv" id="navbarCollapse">
            <div className="navbar-nav ">
              <Link to="/" className="nav-item nav-link" onClick={handleLinkClick}>Home</Link>
              <Link to="/about" className="nav-item nav-link" onClick={handleLinkClick}>About</Link>

             <div className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
            </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                  <li><Link className="dropdown-item" to="/service" onClick={handleLinkClick}>Service</Link></li>
                  <li><Link className="dropdown-item" to="/blog" onClick={handleLinkClick}>Blog Detail</Link></li>
                  <li><Link className="dropdown-item" to="/destination" onClick={handleLinkClick}>Destination</Link></li>
                  <li><Link className="dropdown-item" to="/package" onClick={handleLinkClick}>Packages</Link></li>
                  <li><Link className="dropdown-item" to="/testimonial" onClick={handleLinkClick}>Testimonial</Link></li>
                </ul>
              </div> 
              <Link to="/package" className="nav-item nav-link" onClick={handleLinkClick}>Packages</Link>

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
