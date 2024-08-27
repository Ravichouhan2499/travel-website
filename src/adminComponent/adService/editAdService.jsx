import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { database } from '../../Config';

export default function EditadServices() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState({
    heading: '',
    details: '',
   
  });
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const docRef = doc(database, 'services', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setServiceData(docSnap.data());
        } else {
          setMessage("No such package!");
        }
      } catch (error) {
        console.error("Error fetching package data: ", error);
        setMessage("Error fetching package data. Please try again.");
      }
    };

    fetchServiceData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const Update = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
    
      const docRef = doc(database, 'services', id); // Use id from useParams
      await updateDoc(docRef, {
        heading: serviceData.heading,
        details: serviceData.details,
       
      });

      setMessage("Service  updated successfully!");
      
      navigate('/admin/viewservices');
    } catch (error) {
      console.error("Error updating Services: ", error);
      setMessage("Error updating services. Please try again.");
    }
  };


  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-success'> Edit Services Details</h2>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={Update}>

              <div className="form-group">
                <label><b>Heading</b></label>
                <input 
                  type='text' 
                  name="heading" 
                  value={serviceData.heading} 
                  onChange={handleInputChange} 
                  className='form-control' 
                  required
                />
              </div>
              <div className="form-group">
                <label><b>Details</b></label>
                <textarea type='text' name='details' value={serviceData.details} onChange={handleInputChange} className='details' style={{ width: '100%', height: '150px' }} required />
              </div>
              <button type="submit" className='btn btn-info btn-block mt-3'>Add Services</button>
            </form>
          <hr/>

        
        </div>
      </div>
    </div>
  </div>    
  )
}
