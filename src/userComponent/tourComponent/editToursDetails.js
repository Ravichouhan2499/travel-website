import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { database, storage } from '../../Config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

export default function EditGroupDetails() {
    const { id } = useParams(); // Get group ID from the URL
    const navigate = useNavigate();

    const [groupDetails, setGroupDetails] = useState({
        tour: '',
        payment: '',
        numberOfPeople: '',
        contact: '',
        paymentMethod: '',
        imageUrl: '',
    });
    const [img, setImg] = useState(null); // Store the new image if uploaded
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Fetch group details on component mount
    useEffect(() => {
        const fetchGroupDetails = async () => {
            try {
                const groupRef = doc(database, 'Groups', id);
                const groupSnap = await getDoc(groupRef);

                if (groupSnap.exists()) {
                    setGroupDetails(groupSnap.data());
                } else {
                    setError('Group not found!');
                }
            } catch (err) {
                console.error('Error fetching group details:', err);
                setError('Failed to fetch group details.');
            }
        };

        fetchGroupDetails();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGroupDetails({ ...groupDetails, [name]: value });
    };

    const handleImageChange = (e) => {
        setImg(e.target.files[0]);
    };

    const handleUpdateGroup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        try {
            let imageUrl = groupDetails.imageUrl; // Retain existing image URL if no new image is uploaded

            if (img) {
                const imageRef = ref(storage, `group-images/${v4()}`);
                const snapshot = await uploadBytes(imageRef, img);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const groupRef = doc(database, 'Groups', id);

            // Update group details in Firestore
            await updateDoc(groupRef, {
                tour: groupDetails.tour,
                payment: parseFloat(groupDetails.payment),
                numberOfPeople: parseInt(groupDetails.numberOfPeople),
                contact: groupDetails.contact,
                paymentMethod: groupDetails.paymentMethod,
                imageUrl,
            });

            setMessage('Group updated successfully!');
            navigate('/agent/dashboard'); // Redirect to group list after update
        } catch (err) {
            console.error('Error updating group:', err);
            setError('Failed to update group details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">Edit Group Details</h2>
                        {message && <div className="alert alert-success">{message}</div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleUpdateGroup}>
                            <div className="form-group">
                                <label htmlFor="image"><b>Current Image</b></label>
                                {groupDetails.imageUrl ? (
                                    <img
                                        src={groupDetails.imageUrl}
                                        alt="Group"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover', display: 'block' }}
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <label htmlFor="newImage" className="mt-3"><b>Upload New Image (optional)</b></label>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Tour Name</b></label>
                                <input
                                    type="text"
                                    name="tour"
                                    className="form-control"
                                    value={groupDetails.tour}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Contact</b></label>
                                <input
                                    type="number"
                                    name="contact"
                                    className="form-control"
                                    value={groupDetails.contact}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Payment</b></label>
                                <input
                                    type="number"
                                    name="payment"
                                    className="form-control"
                                    value={groupDetails.payment}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Payment Method</b></label>
                                <select
                                    className="form-control"
                                    name="paymentMethod"
                                    value={groupDetails.paymentMethod}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="online">Online</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label><b>Number of People</b></label>
                                <input
                                    type="number"
                                    name="numberOfPeople"
                                    className="form-control"
                                    value={groupDetails.numberOfPeople}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-info btn-block mt-3"
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Update Group'}
                            </button>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}
