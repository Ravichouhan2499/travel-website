import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database, storage } from '../../Config'; // Adjust the import based on your config file
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4, v4 } from 'uuid'; // For unique image naming

export default function Blog() {
    
    const bplace = useRef();
    const bDetails = useRef();
    const [imageFile, setImageFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const Add = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            let imageUrl = null;
            
            if (imageFile) {
                const imageRef = ref(storage, `blog-images/${v4()}`);
                const snapshot = await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const obj = {
                place: bplace.current.value,
                details: bDetails.current.value,
                imageUrl: imageUrl
            };

            const blogCollection = collection(database, 'blogs');
            await addDoc(blogCollection, obj);

            setMessage("Blog added successfully!");
            e.target.reset();
            setImageFile(null);
          
        } catch (error) {
            console.error("Error adding blog: ", error);
            setMessage("Error adding blog. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className='text-center alert-success'>Add Blog Details</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={Add}>
                            <div className="form-group">
                                <label><b>Image</b></label>
                                <input 
                                    type="file" 
                                    className="form-control-file" 
                                    accept="image/*" 
                                    onChange={handleImageChange} 
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Place</b></label>
                                <input 
                                    type="text" 
                                    ref={bplace} 
                                    className='form-control' 
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Details</b></label>
                                <textarea 
                                    ref={bDetails} 
                                    style={{ width: '100%', height: '150px' }} 
                                    required
                                />
                            </div>
                            <button type="submit" className='btn btn-info btn-block mt-3'>
                                Add Blog Details
                            </button>
                        </form>
                        <hr/>
                    </div>
                </div>
            </div>
        </div> 
    );
}
