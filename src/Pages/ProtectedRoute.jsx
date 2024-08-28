import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Auth } from '../Config';           // Adjust this import path as necessary

export default function ProtectedRoute(){
  const isAuthenticated = Auth.currentUser !== null;

  return(<>
  
  {isAuthenticated ? <Outlet/> : <Navigate to='/admin' replace /> }  
  
  </>
  )
};