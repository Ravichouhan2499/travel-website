import React, { useEffect, useState } from 'react'
import './Service.css'
import { RiTeamFill } from 'react-icons/ri'
import { PiAirplaneInFlightBold, PiPersonSimpleRunBold } from 'react-icons/pi'
import { MdDashboardCustomize } from 'react-icons/md'
import { database } from '../../Config'
import { collection, getDocs } from 'firebase/firestore'

export default function Service() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'services'));
        const servicesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };

    fetchServices();
  }, []);


  return (
<div className="container-fluid py-5">
  <div className="container pt-5 pb-4">
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
        <div className="service-item bg-white text-center mb-1 py-5 px-4">
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
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <i className="fa fa-2x mx-auto mb-4"> <b> <PiPersonSimpleRunBold /> </b></i>
        
          <h5 className="mb-2">Tour</h5>
          <p className="m-0">Explore our diverse tours designed to match every travel style and interest. With expert guides, comfortable travel, and unique experiences, we ensure your journey is both enjoyable and memorable tour of your life</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
        <i className="fa fa-2x fa-solid fa-users mx-auto mb-4" />
        <h5 className="mb-2">Group package</h5>
          <p className="m-0">Our group packages offer customized experiences for families, friends, or colleagues. Benefit from cost-effective rates and special deals while we handle all the planning. Each itinerary is tailored to your group’s needs, with expert support </p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <i className="fa fa-2x   mx-auto mb-4"><MdDashboardCustomize />
          </i> 
          <h5 className="mb-2">Customized Tour</h5>
          <p className="m-0">we simplify your trip by offering both transportation and hotel bookings. You can easily search and compare accommodations like hotels, guesthouses,and resorts based on your destination.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}



{/* <div className="row">
{services.map((service) => (
  <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
    <div className="service-item bg-white text-center mb-2 py-5 px-4">
      <i className="fa fa-2x mx-auto mb-4">
        {getIcon(service.icon)}
      </i>
      <h5 className="mb-2">{service.title}</h5>
      <p className="m-0">{service.description}</p>
    </div>
  </div>
))}
</div> */}