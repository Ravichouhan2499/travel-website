import React from 'react'
import './Login.css'
export default function Login() {
  return (
<div className='authpage'>
  <div className="container-fluid py-5 img" style={{ margin: '0px 0' }}>
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center mb-5">
          <div className="mb-4">
            <h1 className="text-white"><span className="text-primary">AVANTIKA</span> VACATIONS</h1>
          </div>
          <h6 className="text-white text-uppercase" style={{ letterSpacing: 5 }}>A Complete Travel Solution</h6>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="form-container">
            <h2 className='text-center heed'>Login</h2>
            <form>
              <div className="form-group">
                <label><b>Email</b></label>
                <input type="email" className='form-control' required/>
              </div>
              <div className="form-group">
                <label><b>Password</b></label>
                <input type="password" className='form-control' required/>
              </div>
              <button type="submit" className='btn btn-info btn-block mt-5'>Login</button>
            </form>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
