import React, { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'
import { database } from '../../Config'

export default function Destiny() {

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'destinations'));
        const destinationsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDestinations(destinationsData);
      } catch (error) {
        console.error("Error fetching destinations: ", error);
      }
    };

    fetchDestinations();
  }, []);

  return (
  <div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destination</h6>
      <h1>Explore Top Destination</h1>
    </div>

    <div className="row">
{destinations.map((destination) => (
  <div className="col-lg-4 col-md-6 mb-4" key={destination.id}>
    <div className="destination-item position-relative overflow-hidden mb-2">
      <img className="img-fluid" src={destination.destimageUrl} alt={destination.destname} style={{height: '240px', width: '100%', objectFit: 'cover'}} />
      <a className="destination-overlay text-white text-decoration-none" href="#">
        <h5 className="text-white">{destination.destname}</h5>
        <span>{destination.destplace}</span>
      </a>
    </div>
  </div>
))}
</div>

  </div>
</div>


  )
}

