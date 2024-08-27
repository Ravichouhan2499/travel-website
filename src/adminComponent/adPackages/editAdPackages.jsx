import React, { useEffect, useState } from 'react';
import { database, storage } from '../../Config';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPackages() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [packageData, setPackageData] = useState({
    pkplace: '',
    pkday: '',
    pkperson: '',
    pkprice: '',
    pkimageUrl: ''
  });
  const [newImage, setNewImage] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const docRef = doc(database, 'Packages', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPackageData(docSnap.data());
        } else {
          setMessage("No such package!");
        }
      } catch (error) {
        console.error("Error fetching package data: ", error);
        setMessage("Error fetching package data. Please try again.");
      }
    };

    fetchPackageData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPackageData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const Update = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      let imageUrl = packageData.pkimageUrl;

      // Handle new image upload
      if (newImage) {
        const imageRef = ref(storage, `package-images/${v4()}`);
        const snapshot = await uploadBytes(imageRef, newImage);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      // Update the document in Firestore
      const docRef = doc(database, 'Packages', id); // Use id from useParams
      await updateDoc(docRef, {
        pkplace: packageData.pkplace,
        pkday: parseInt(packageData.pkday),
        pkperson: parseInt(packageData.pkperson),
        pkprice: parseFloat(packageData.pkprice),
        pkimageUrl: imageUrl
      });

      setMessage("Package updated successfully!");
      setNewImage(null);

      // Navigate back to the list or some other page after successful update
      navigate('/admin/viewpackages');
    } catch (error) {
      console.error("Error updating package: ", error);
      setMessage("Error updating package. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className='text-center alert-danger'>Edit Package Details</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={Update}>
              <div className="form-group">
                <label htmlFor="image"><b>Image</b></label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => setNewImage(e.target.files[0])}
                />
                {packageData.pkimageUrl && <img src={packageData.pkimageUrl} alt="Current package" style={{width: '100px', height: '100px', objectFit: 'cover'}} />}
              </div>
              <div className="form-group">
                <label><b>Place</b></label>
                <input 
                  type="text" 
                  name="pkplace" 
                  value={packageData.pkplace} 
                  onChange={handleInputChange} 
                  className='form-control' 
                  required
                />
              </div>
              <div className="form-group">
                <label><b>Days</b></label>
                <input 
                  type='number' 
                  name="pkday" 
                  value={packageData.pkday} 
                  onChange={handleInputChange} 
                  className='form-control' 
                  required
                />
              </div>
              <div className="form-group">
                <label><b>Person</b></label>
                <input 
                  type="number" 
                  name="pkperson" 
                  value={packageData.pkperson} 
                  onChange={handleInputChange} 
                  className='form-control' 
                  required
                />
              </div>
              <div className="form-group">
                <label><b>Price</b></label>
                <input 
                  type="number" 
                  name="pkprice" 
                  value={packageData.pkprice} 
                  onChange={handleInputChange} 
                  className='form-control' 
                  required
                />
              </div>
              <button type="submit" className='btn btn-info btn-block mt-3'>Update Package</button>
            </form>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  );
}
