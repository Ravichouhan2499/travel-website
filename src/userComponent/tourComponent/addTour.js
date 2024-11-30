import React, { useRef, useState, useEffect } from 'react';
import { database, storage, auth, Auth } from '../../Config'; // Ensure auth is imported
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import Img from '../../qr1.jpg'
import './addTours.css'

export default function AdGroup() {
    const groupTour = useRef();
    const groupPayment = useRef();
    const groupPeople = useRef();
    const groupContact = useRef()

    const [img, setImg] = useState(null);
    const [message, setMessage] = useState('');
    const [agent, setAgent] = useState({ id: '', name: '' }); // Store agent details

    const groupsCollection = collection(database, 'Groups');

    const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

    // Fetch the logged-in agent's details
    useEffect(() => {
        const user = Auth.currentUser;
        if (user) {
            setAgent({
                id: user.uid,
            });
        }
    }, []);

    const addGroup = async (e) => {
        e.preventDefault();
        setMessage('');
    
        try {
            let imageUrl = null;
            if (img) {
                const imageRef = ref(storage, `group-images/${v4()}`);
                const snapshot = await uploadBytes(imageRef, img);
                imageUrl = await getDownloadURL(snapshot.ref);
            }
    
            const groupData = {
                tour: groupTour.current.value,
                payment: parseFloat(groupPayment.current.value),
                numberOfPeople: parseInt(groupPeople.current.value),
                Contact : groupContact.current.value,
                agentId: agent.id,
                imageUrl: imageUrl,
                paymentStatus: 'pending',  // Set payment status to 'pending' initially
                createdAt: new Date().toISOString()
            };
    
            const docRef = await addDoc(groupsCollection, groupData);
            console.log('Document written with ID:', docRef.id);
            setMessage('Group added successfully! Payment status is pending until admin approval.');
    
            e.target.reset();
            setImg(null);
        } catch (error) {
            console.error('Error adding document:', error);
            setMessage('Error adding group. Please try again.');
        }
    };
    

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">Add Tours</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={addGroup}>
                        <div className="row">
                        <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="image"><b>Image</b></label>
                                        <input 
                                            type="file" 
                                            onChange={(e) => setImg(e.target.files[0])} 
                                            accept="image/*" 
                                            className="form-control"
                                            required 
                                        />
                                    </div>
                                </div>
                                {/* Static QR Code Column */} 
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    {/* <div>
                                        <p>
                                        <b>Bank</b> : Hdfc Bank <br/>
                                        Account Holder : Avantika Vacations <br/>
                                        Current : 50200093153178 <br/>
                                         Branch :  PADRAUNA <br/>
                                        IFSC : HDFC0001906<br/>
                                        GST : 09CDUPS3041J1ZX <br/>
                                        </p>
                                    </div> */}
                                    <div className='qr'> 
                                        <img 
                                            src={Img}
                                            alt="QR Code" 
                                            className="img-fluid" 
                                            style={{ maxWidth: '35%' }} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><b>Tour Name</b></label>
                                <input type="text" ref={groupTour} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label><b>contact</b></label>
                                <input type="number" ref={groupContact} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label><b>Payment</b></label>
                                <input type="number" ref={groupPayment} className="form-control" required />
                            </div>
                            <div className="form-group">
                             <label><b>Payment method</b></label>
                               <select
                                className="form-control"
                                    value={paymentMethod}
                                onChange={handlePaymentMethodChange}
                                     required
                                      >
                                 <option value="">Select Payment Method</option>
        <option value="online">Online</option>
        <option value="cash">Cash</option>
      </select>
    </div>
                            <div className="form-group">
                                <label><b>Number of People</b></label>
                                <input type="number" ref={groupPeople} className="form-control" required />
                            </div>
                            {/* <div className="form-group">
                                <label><b>Agent Details</b></label>
                                <p><b>ID:</b> {agent.id}</p>
                               
                            </div> */}
                            <button type="submit" className="btn btn-info btn-block mt-3">
                                Add Group
                            </button>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}
