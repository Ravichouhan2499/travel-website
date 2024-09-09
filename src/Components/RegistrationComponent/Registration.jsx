import React from 'react';
import './Registration.css';

export default function Registration() {
  return (
    <div className="container-fluid py-5 imgg" style={{ margin: '90px 0' }}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="mb-4">
              <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Mega Offer</h6>
              <h1 className="text-white"><span className="text-primary">20% OFF</span> ON EVERY TRIP</h1>
            </div>
            <p className="text-white">
              Some of the eminent pilgrimage destinations in India include ancient and revered destinations such as <b>Rishikesh, Mathura, Haridwar, Dwarka, Allahabad, Pushkar, Varanasi, Shirdi, Puri, Rameshwaram, Kolhapur, Madurai, Tirupati, Kanchipuram, Nashik, Kanyakumari, Amritsar, Murudeshwar, Tarapith, Ujjain, Varkala</b>
            </p>
            <ul className="list-inline text-white m-0">
              <li className="py-2"><i className="fa fa-check text-primary me-3" />Fast Booking Service</li>
              <li className="py-2"><i className="fa fa-check text-primary me-3" />24/7 support</li>
              <li className="py-2"><i className="fa fa-check text-primary me-3" />Hotel Booking</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4">
                <h1 className="text-white m-0">Contact us</h1>
              </div>
              <div className="card-body rounded-bottom bg-white p-5">
                <form>
                  <div className="form-group mb-3">
                    <input type="text" className="form-control p-2" placeholder="Your name" required />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" className="form-control p-2" placeholder="Your email" required />
                  </div>

                  <div className="form-group mb-3">
                  <textarea className="form-control bg-light border-2" rows={3} placeholder="Message" required />

                  </div>

                  {/* <div className="form-group mb-3">
                    <select className="form-select px-4" style={{ height: '47px' }}>
                      <option value="">Select a destination</option>
                      <option value="1">Jyotirling</option>
                      <option value="2">Khatushyam</option>
                      <option value="3">Dwarka</option>
                      <option value="4">Badrinath</option>
                      <option value="5">Hills</option>
                    </select>
                  </div> */}
                  <div>
                    <button className="btn btn-primary btn-block py-3 w-100" type="submit">Contact</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
