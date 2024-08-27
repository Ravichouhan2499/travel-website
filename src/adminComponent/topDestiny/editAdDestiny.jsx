import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { database, storage } from '../../Config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function EditTopDestiny() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [destination, setDestination] = useState({
        destname: '',
        destplace: '',
        destimageUrl: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchDestinationData = async () => {
            try {
                const docRef = doc(database, 'destinations', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setDestination(docSnap.data());
                } else {
                    setMessage("No such destination found!");
                }
            } catch (error) {
                console.error("Error fetching destination data: ", error);
                setMessage("Error fetching destination data. Please try again.");
            }
        };

        fetchDestinationData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDestination(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const updateDestination = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            let imageUrl = destination.destimageUrl;

            if (imageFile) {
                const imageRef = ref(storage, `destination-images/${id}`);
                const snapshot = await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const docRef = doc(database, 'destinations', id);
            await updateDoc(docRef, {
                destname: destination.destname,
                destplace: destination.destplace,
                destimageUrl: imageUrl
            });

            setMessage("Destination updated successfully!");
            navigate('/admin/viewdestiny');
        } catch (error) {
            console.error("Error updating destination: ", error);
            setMessage("Error updating destination. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">Edit Destination Details</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={updateDestination}>
                            <div className="form-group">
                                <label htmlFor="image"><b>Image</b></label>
                                <input type="file" name="image" className="form-control-file" onChange={handleImageChange} />
                                {destination.destimageUrl && <img src={destination.destimageUrl} alt="Current package" style={{width: '100px', height: '100px', objectFit: 'cover'}} />}

                            </div>
                            <div className="form-group">
                                <label htmlFor="name"><b>Name</b></label>
                                <input
                                    type="text"
                                    name="destname"
                                    className="form-control"
                                    value={destination.destname}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="place"><b>Place</b></label>
                                <input
                                    type="text"
                                    name="destplace"
                                    className="form-control"
                                    value={destination.destplace}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-info btn-block mt-3">Update Destination</button>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}
