import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Auth } from '../Config';           // Adjust this import path as necessary
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../Components/loaderComponent/loader';

export default function PublicRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading , setLoading] = useState(true)
  

  useEffect(() => {
    const loginStatus = onAuthStateChanged(Auth, (agent) => {
      if (agent) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
     setLoading(false)
    });

    return () => loginStatus();
  }, []);

  
  if (loading) {
    return <Loader/>;
  }

  return isAuthenticated ? <Navigate to='/admin/dashboard' replace /> : <Outlet />;

}
