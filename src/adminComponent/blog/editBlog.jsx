import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { database, storage } from '../../Config'; // Adjust the import based on your config file
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default function EditBlog() {
    const { id } = useParams(); // Get the blog ID from URL parameters
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState({
        place: '',
        details: '',
        imageUrl: ''
    });
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const placeRef = useRef();
    const detailsRef = useRef();

    useEffect(() => {
        // Fetch existing blog data when component mounts
        const fetchBlogData = async () => {
            try {
                const docRef = doc(database, 'blogs', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBlogData(docSnap.data());
                } else {
                    setMessage("No such blog!");
                }
            } catch (error) {
                console.error("Error fetching blog data: ", error);
                setMessage("Error fetching blog data. Please try again.");
            }
        };

        fetchBlogData();
    }, [id]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            let updatedImageUrl = blogData.imageUrl; // Preserve existing image URL

            // Handle image upload if a new image is selected
            if (image) {
                const imageRef = ref(storage, `blog-images/${uuidv4()}`);
                const snapshot = await uploadBytes(imageRef, image);
                updatedImageUrl = await getDownloadURL(snapshot.ref);
            }

            // Update the blog data in Firestore
            const docRef = doc(database, 'blogs', id);
            await updateDoc(docRef, {
                place: placeRef.current.value,
                details: detailsRef.current.value,
                imageUrl: updatedImageUrl
            });

            setMessage("Blog updated successfully!");
            navigate('/admin/viewBlog'); // Navigate back to the blog list or wherever appropriate
        } catch (error) {
            console.error("Error updating blog: ", error);
            setMessage("Error updating blog. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className='text-center alert-success'>Edit Blog Details</h2>
                        {message && <div className="alert alert-info">{message}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="image"><b>Image</b></label>
                                <input 
                                    type="file" 
                                    name="image" 
                                    className="form-control-file" 
                                    onChange={handleImageChange} 
                                />
                                {blogData.imageUrl && !image && (
                                    <div>
                                        <img 
                                            src={blogData.imageUrl} 
                                            alt="Blog" 
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label><b>Place</b></label>
                                <input 
                                    type="text" 
                                    ref={placeRef} 
                                    defaultValue={blogData.place} 
                                    className='form-control' 
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Details</b></label>
                                <textarea 
                                    ref={detailsRef} 
                                    defaultValue={blogData.details} 
                                    style={{ width: '100%', height: '150px' }} 
                                    required
                                />
                            </div>
                            <button type="submit" className='btn btn-info btn-block mt-3'>
                                Update Blog Details
                            </button>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}
