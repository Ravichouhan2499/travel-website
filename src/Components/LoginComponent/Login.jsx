import React from 'react'
import './Login.css'
export default function Login() {
  return (
   <div className="login-page">
  <div className="background-wrapper">  
    <div className="content-container">
      <div className="centered-content">
        <header className="company-header">
          <h1 className="company-name">
            <span className="highlight">AVANTIKA</span> VACATIONS
          </h1>
          <p className="company-tagline">A Complete Travel Solution</p>
        </header>
        <main className="login-section">
          <div className="login-box">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="user-email">Email Address</label>
                <input id="user-email" type="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="user-password">Password</label>
                <input id="user-password" type="password" required />
              </div>
              <button type="submit" className="submit-btn">LogIn</button>
            </form>
            <div className="form-divider" />
          </div>
        </main>
      </div>
    </div>
  </div>
</div>

  
  )
}
