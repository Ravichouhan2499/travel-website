import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Img/sitelogo.jpg'
import './adminNav.css'


export default function AdminNav() {
  return (
    <div className="container-fluid position-relative nav-bar px-0">
  <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-2 px-0">
    <Link to="/admin/dashboard" className="navbar-brand">
      <img src={img} alt="Brand" style={{ width: '150px', height: '60px' }} className='imglogo' />
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Packages
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewPackages">View Packages Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/packages">Add Packages Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewServices">View Services Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/service">Add Services Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Top Destination
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewDestiny">View Destination Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/topDestiny">Add Destination Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/admin/viewBlog">View Blog Details</Link></li>
            <li><Link className="dropdown-item" to="/admin/blog">Add Blog Details</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><Link className="dropdown-item" to="/service">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</div>
        
       
  )
}
