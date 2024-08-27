import React, { useRef } from 'react'
import './Login.css'
export default function Login() {


  const Email = useRef()
  const Pass = useRef()

  const Login =(e)=>
  {
    e.preventDefault()

    var obj = {
      email : Email.current.value,
      password  : Pass.current.value
    }
    console.log("LoginDetails is :", obj)
  }

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
            <form className="login-form" onSubmit={Login}>
              <div className="input-group">
                <label  >Email Address</label>
                <input ref={Email} type="email" required />
              </div>
              <div className="input-group">
                <label >Password</label>
                <input ref={Pass}  type="password" required />
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


