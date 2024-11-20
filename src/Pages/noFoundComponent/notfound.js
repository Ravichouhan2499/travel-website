import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css'; // Optional for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="go-home-button">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
