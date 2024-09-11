import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Auth } from '../Config';           // Adjust this import path as necessary
import { onAuthStateChanged } from 'firebase/auth';

export default function PublicRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    const loginStatus = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
     
    });

    return () => loginStatus();
  }, []);

 

  return isAuthenticated ? <Navigate to='/admin/dashboard' replace /> : <Outlet />;
//If logged in (isAuthenticated is true): Redirect to the dashboard (/admin/dashboard).
  //If logged in (isAuthenticated is false): Redirect to the login page or child Component using (<Outlet/>).
}
