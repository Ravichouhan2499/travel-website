import React, { useState, useEffect } from 'react';
import { Auth } from '../../Config';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = Auth.currentUser;
    if (currentUser) {
      setUser({
        email: currentUser.email,
        displayName: currentUser.displayName || 'Admin',
        photoURL: currentUser.photoURL || '',
        creationTime: currentUser.metadata.creationTime,
      });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img src={user.photoURL} className="card-img-top" alt="Profile" />
            <div className="card-body">
              <h5 className="card-title">{user.displayName}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Account created: {user.creationTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}