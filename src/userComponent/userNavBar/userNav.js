import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Img/sitelogo.jpg';
import './userNav.css';
import { Auth } from '../../Config';
import { signOut } from 'firebase/auth';

export default function UserNav() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const logout = window.confirm("Are you sure you want to proceed?");
      if (logout) {
        await signOut(Auth);
        alert("Logout Successfully");
        navigate('/admin');
      } else {
        alert("Action canceled!");
      }
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    
    // Check if both elements exist
    if (navbarToggler && navbarCollapse) {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    } else {
      console.error('Navbar elements not found');
    }
  
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="container-fluid p-4">
      <div className="container-lg navbar-container p-3">
        <nav className="navbar navbar-expand-md bg-light navbar-light shadow-lg fixed-top p-1">
          <Link to="/agent/dashboard" className="navbar-brand">
            <img src={img} alt="Brand" className="imglogo" onClick={handleLinkClick} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="spacer"></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/agent/dashboard" className="nav-link" onClick={handleLinkClick}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Tour</b>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/agent/addTour" onClick={handleLinkClick}>
                      Add Tour
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/agent/viewTour" onClick={handleLinkClick}>
                      View Tour
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Profile</b>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
