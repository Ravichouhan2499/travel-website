import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Auth, database } from '../Config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Loader from '../Components/loaderComponent/loader';

export default function RoleBasedRoute({ requiredRole }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, async (agent) => {
      if (agent) {
        // Get user role from Firestore
        const agentDoc = await getDoc(doc(database, 'agent', agent.uid));
        if (agentDoc.exists()) {
          setUserRole(agentDoc.data().role);
          setIsAuthenticated(true);
        }
      } else {
        setIsAuthenticated(false);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return userRole === 'admin' 
      ? <Navigate to="/admin/dashboard" replace />
      : <Navigate to="/agent/dashboard" replace />;
  }

  return <Outlet />

}