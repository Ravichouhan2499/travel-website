import React from 'react'

export default function TopBar() {
  return (
   <div>
  <div className="container-fluid bg-light pt-3 pb-6 d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <p><i className="fa fa-envelope mr-2" />avantikavacations@gmail.com</p>
            <p className="text-body px-3">|</p>
            <p><i className="fa fa-phone-alt mr-2"/>+91 7068695511</p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            <a className="text-primary px-3" href>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-twitter" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-primary px-3" href>
              <i className="fab fa-instagram" />
            </a>
            <a className="text-primary pl-3" href>
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
