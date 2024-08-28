import React, { useRef, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../../Config'

export default function Login() {

    const [login , setLogin] = useState()
    const [message , setMessage] =  useState()
    const navi =  useNavigate() 
  const Email = useRef()
  const Pass = useRef()

  const Login =(e)=>
  {
    e.preventDefault()

    const email = Email.current.value;
    const password = Pass.current.value;


    signInWithEmailAndPassword(Auth, email ,password )
    .then((userCredential)=>
    {
        console.log(userCredential)

        alert("Login Succesfully")
        setLogin(true)
        navi('/admin/dashboard')  
        }).catch((error)=>
    {
        alert(error)
    })
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
              <br/>
            </form>
            {/* <span>If you are not register ? <Link to="/admin/signUp">Sign Up</Link></span> */}
            <div  />
          </div>
        </main>
      </div>
    </div>
  </div>
</div>

  
  )
}


