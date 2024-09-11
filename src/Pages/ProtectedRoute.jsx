import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Auth } from '../Config';           // Adjust this import path as necessary
import { onAuthStateChanged } from 'firebase/auth';

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginStatus = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); // Ensure that loading is false after checking auth status
    });

    return () => loginStatus();
  }, []);

  if (loading) {
    return <div></div>; // Show a loading indicator while checking auth status
  }

  return isAuthenticated ? <Outlet /> : <Navigate to='/admin' replace />;

  //If the user is logged in (isAuthenticated === true): The protected content or child components are rendered via <Outlet />.

  //If the user is not logged in (isAuthenticated === false): The user is redirected to the login page (/admin) using <Navigate />.
}
