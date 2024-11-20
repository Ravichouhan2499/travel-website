import React, { useRef, useState, useEffect } from 'react';
import { database, storage, auth, Auth } from '../../Config'; // Ensure auth is imported
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

export default function AdGroup() {
    const groupTour = useRef();
    const groupPayment = useRef();
    const groupPeople = useRef();

    const [img, setImg] = useState(null);
    const [message, setMessage] = useState('');
    const [agent, setAgent] = useState({ id: '', name: '' }); // Store agent details

    const groupsCollection = collection(database, 'Groups');

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
                agentId: agent.id,
                imageUrl: imageUrl,
                createdAt: new Date().toISOString() 
            };

            const docRef = await addDoc(groupsCollection, groupData);
            console.log('Document written with ID:', docRef.id);
            setMessage('Group added successfully!');

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
                        <h2 className="text-center alert-success">Add Group</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={addGroup}>
                            <div className="form-group">
                                <label htmlFor="image"><b>Image</b></label>
                                <input 
                                    type="file" 
                                    onChange={(e) => setImg(e.target.files[0])} 
                                    accept="image/*" 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Tour Name</b></label>
                                <input type="text" ref={groupTour} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label><b>Payment</b></label>
                                <input type="number" ref={groupPayment} className="form-control" required />
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
