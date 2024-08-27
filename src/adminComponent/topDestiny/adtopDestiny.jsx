import React, { useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database, storage } from '../../Config';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function AdTopDestiny() {
    const tName = useRef();
    const tPlace = useRef();
    const [img, setImg] = useState(null);
    const [message, setMessage] = useState('');
    
    const Add = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            let imageUrl = null;
            if (img) {
                const imageRef = ref(storage, `destination-images/${v4()}`);
                const snapshot = await uploadBytes(imageRef, img);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const obj = {
                destname: tName.current.value,
                destplace: tPlace.current.value,
                destimageUrl: imageUrl,
            };

            const docRef = await addDoc(collection(database, 'destinations'), obj);
            console.log("Document written with ID: ", docRef.id);
            setMessage("Destination added successfully!");

            e.target.reset();
            setImg(null);
            
        } catch (error) {
            console.error("Error adding destination: ", error);
            setMessage("Error adding destination. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className='text-center alert-success'> Add Destination Details</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={Add}>
                            <div className="form-group">
                                <label><b>Image</b></label>
                                <input 
                                    type="file"  
                                    className="form-control-file" 
                                    onChange={(e) => setImg(e.target.files[0])}
                                    accept="image/*" 
                                   required
                                />
                            </div>
                            <div className="form-group">
                                <label ><b> Name</b></label>
                                <input type="text" ref={tName} className='form-control' required/>
                            </div>
                            <div className="form-group">
                                <label><b>Location</b></label>
                                <input type='text' ref={tPlace} className='form-control' required/>
                            </div>
                            <button type="submit" className='btn btn-info btn-block mt-3'>Add Destination</button>
                        </form>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>    
    );
}
