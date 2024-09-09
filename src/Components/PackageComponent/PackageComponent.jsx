import React, { useEffect, useState } from 'react'


import { FaCalendarAlt, FaMapMarkerAlt, FaRupeeSign, FaStar, FaUser } from 'react-icons/fa'
import { database } from '../../Config'
import { collection, getDocs } from 'firebase/firestore'

export default function PackageComponent() {

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, 'Packages'));
      const packageData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).reverse();
      setPackages(packageData);
    } catch (error) {
      console.error("Error fetching packages: ", error);
    }
  };

  return (
   <div className="container-fluid py-5">
  <div className="container pt-5 pb-3">
    <div className="text-center mb-3 pb-3">
      <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Packages</h6>
      <h1>Pefect Tour Packages</h1>
    </div>
  
    <div className="row">
{packages.map((pkg) => (
  <div className="col-lg-4 col-md-6 mb-4" key={pkg.id}>
    <div className="package-item bg-white mb-2">
      <img className="img-fluid" src={pkg.pkimageUrl} style={{height:'210px', width:'100%'}} alt={pkg.pkplace} />
      <div className="p-4">
        <div className="d-flex justify-content-between mb-3">
          <small className="m-0"><FaMapMarkerAlt className="text-primary mr-2" />{pkg.pkloc}</small>
          <small className="m-0"><FaCalendarAlt className="text-primary mr-2" />{pkg.pkday} days</small>
          <small className="m-0"><FaUser className="text-primary mr-2" />{pkg.pkperson} Person</small>
        </div>
        <a className="h5 text-decoration-none" href="#">{pkg.pkplace}</a>
        <div className="border-top mt-4 pt-4">
          <div className="d-flex justify-content-between">
            <h6 className="m-0"><FaStar className="text-primary mr-2" />4.5 <small>(250)</small></h6>
            <h5 className="m-0"><FaRupeeSign />{pkg.pkprice}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
</div> 

    
  </div>
</div>

  )
}

