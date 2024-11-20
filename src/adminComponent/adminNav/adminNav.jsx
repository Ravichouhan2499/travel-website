import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../Img/sitelogo.jpg'
import './adminNav.css'
import { signOut } from 'firebase/auth'
import { Auth } from '../../Config'


export default function AdminNav() {

  
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      
     const logout = window.confirm("Are you sure you want to proceed?");
      if (logout) {
        await signOut(Auth);
        alert("Logout Successfully");
        navigate('/admin');
        // Proceed with the action
    } else {
        alert("Action canceled!");
        // Cancel the action
    }
          
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };


  const handleDoubleNavigate = () => {
    navigate('/');
    setTimeout(() => navigate('/'), 0); // Navigate again after a brief delay
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
    <div className="container-fluid position-relative nav-bar px-0">
  <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-2 px-0">
    <Link to="/admin/dashboard" className="navbar-brand" onClick={handleLinkClick}>
      <img src={img} alt="Brand" style={{ width: '150px', height: '60px' }} className='imglogo' />
    </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="spacer2"></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav  ">
 
      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <>Agent</>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/agent" onClick={handleLinkClick}>Add Agent</Link></li>
            <li><Link className="dropdown-item" to="/admin/viewAgent" onClick={handleLinkClick}>view Agent Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/viewGroup" onClick={handleLinkClick}>Agent Tour Details</Link></li>       </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <>Packages</> 
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewPackages" onClick={handleLinkClick}>View Packages Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/packages" onClick={handleLinkClick}>Add Packages Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <>Top Destination</>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewDestiny" onClick={handleLinkClick}>View Destination Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/topDestiny" onClick={handleLinkClick}>Add Destination Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <>Blog</>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewBlog" onClick={handleLinkClick}>View Blog Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/blog" onClick={handleLinkClick}>Add Blog Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <>Service</>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewServices" onClick={handleLinkClick}>View Services Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/service" onClick={handleLinkClick}>Add Services Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <>Profile</>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Logout</Link></li>
            <li><Link className="dropdown-item" to="/" onClick={handleDoubleNavigate}>Home</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</div>
        
       
  )
}
