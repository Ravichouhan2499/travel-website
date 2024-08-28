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
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div className="service-item bg-white text-center mb-2 py-5 px-4">
                <i className={`fa fa-2x ${service.icon} mx-auto mb-4`} />
                <h5 className="mb-2">{service.heading}</h5>
                <p className="m-0">{service.details}</p>
              </div>
            </div>
          ))}
        </div>

  
  </div>
</div>

  )
}


