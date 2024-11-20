import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Img/sitelogo2.jpg';
import './navbar.css';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Auth from '../../Pages/AuthComponent/Auth';

export default function Navbar() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate()

const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state based on authentication
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);



  const handleLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleLogout = async () => {
    try {
     const logout = window.confirm("Are you sure you want to proceed?");
      if (logout) {
        await signOut(auth)
        alert("Logout Successfully");
        navigate('/');
        // Proceed with the action
    } else {
        alert("Action canceled!");
        // Cancel the action
    }
          
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  

  return (
    <div className="container-fluid p-0">
      <div className="container-lg navbar-container p-0">
        <nav className="navbar navbar-expand-md bg-light navbar-light shadow-lg fixed-top">
          <Link to="/" className="navbar-brand">
            <img
              src={img}
              alt="Brand"
              onClick={handleLinkClick}
              className="imglogo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="spacer1"></div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/package" className="nav-link" onClick={handleLinkClick}>
                  Packages
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
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/service" onClick={handleLinkClick}>
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog" onClick={handleLinkClick}>
                      Blog Detail
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/destination" onClick={handleLinkClick}>
                      Destination
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/package" onClick={handleLinkClick}>
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/testimonial" onClick={handleLinkClick}>
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
              
              {user ? (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/admin" onClick={handleLinkClick}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/admin" className="nav-link" onClick={handleLinkClick}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
