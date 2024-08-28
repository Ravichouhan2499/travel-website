import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database, storage } from '../../Config'; // Adjust the import based on your config file
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4, v4 } from 'uuid'; // For unique image naming
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Blog() {
 
  const [value, setValue] = useState('') // text editor
  
    
    const bplace = useRef();
    const bdate = useRef()
    
    const [imageFile, setImageFile] = useState(null);
    const [message, setMessage] = useState('');

    const stripHtmlTags = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    const strippedDetails = stripHtmlTags(value);


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
                details:  strippedDetails,
                date : bdate.current.value,
                imageUrl: imageUrl
            };

            const blogCollection = collection(database, 'blogs');
            await addDoc(blogCollection, obj);

            setMessage("Blog added successfully!");
            e.target.reset();
            setImageFile(null);
            setValue('')

          
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
                                <label><b>Date</b></label>
                                <input 
                                    type="date" 
                                    ref={bdate} 
                                    className='form-control' 
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
                                <ReactQuill 
            theme="snow" 
            value={value} 
           
            onChange={setValue} 
            style={{height:'200px'}}
            modules={{
                toolbar: [
                    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 
                    {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    ['clean']
                ],
            }}
        />
                            </div>
                            <br/>
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
