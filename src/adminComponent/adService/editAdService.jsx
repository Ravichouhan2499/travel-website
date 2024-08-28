import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { database } from '../../Config';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditadServices() {

  const [value, setValue] = useState('') // text editor
  const { id } = useParams();
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState({
    heading: '',
    details: '',
    icon: '' // Add icon field
  });
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const docRef = doc(database, 'services', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setServiceData(docSnap.data());
          setValue(docSnap.data().details); // Set the initial value for ReactQuill
        } else {
          setMessage("No such service!");
        }
      } catch (error) {
        console.error("Error fetching service data: ", error);
        setMessage("Error fetching service data. Please try again.");
      }
    };

    fetchServiceData();
  }, [id]);

  const stripHtmlTags = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

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
      const docRef = doc(database, 'services', id);
      await updateDoc(docRef, {
        heading: serviceData.heading,
        details: stripHtmlTags(value), // Use state for details
        icon: serviceData.icon // Update icon field
      });

      setMessage("Service updated successfully!");
      navigate('/admin/viewservices');
    } catch (error) {
      console.error("Error updating service: ", error);
      setMessage("Error updating service. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className='text-center alert-success'>Edit Service Details</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={Update}>
              <div className="form-group">
                <label><b>Icon</b></label>
                <input 
                  type='text' 
                  name="icon" 
                  value={serviceData.icon} 
                  onChange={handleInputChange} 
                  className='form-control' 
                  placeholder="Enter icon class name (e.g., 'fas fa-camera')"
                  required
                />
              </div>
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
                <ReactQuill 
                  theme="snow" 
                  value={value} 
                  onChange={setValue} 
                  style={{ height: '200px' }}
                  modules={{
                    toolbar: [
                      [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
                      [{ size: [] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image'],
                      ['clean']
                    ],
                  }}
                />
              </div>
              <br/>
              <button type="submit" className='btn btn-info btn-block mt-3'>Update Service</button>
            </form>
            <hr />
          </div>
        </div>
      </div>
    </div>    
  )
}
