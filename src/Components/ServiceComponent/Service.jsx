import React from 'react'

export default function Service() {
  return (
<div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Services</h6>
      <h1>Tours &amp; Travel Services</h1>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <i className="fa fa-2x fa-route mx-auto mb-4" />
          <h5 className="mb-2">Travel Guide</h5>
          <p className="m-0">Our travel guide offers unparalleled expertise in exploring India’s rich tapestry of religious sites, our guides provide insightful commentary on the historical, cultural, and spiritual significance of each destination</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
          <h5 className="mb-2">Ticket Booking</h5>
          <p className="m-0">Booking by phone is too easy on Call & Online also , just call the ticketing service, share your travel details and any special requests, and a representative will handle the reservation and confirm it with you, ensuring the smooth booking </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <i className="fa fa-2x fa-hotel mx-auto mb-4" />
          <h5 className="mb-2">Hotel Booking</h5>
          <p className="m-0">we simplify your trip by offering both transportation and hotel bookings. You can easily search and compare accommodations like hotels, guesthouses,and resorts based on your destination.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
