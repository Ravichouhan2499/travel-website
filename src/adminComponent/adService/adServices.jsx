
import React, { useRef, useState } from 'react'
import { database } from '../../Config'
import { addDoc, collection } from 'firebase/firestore'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

export default function AdService() {

  const [value, setValue] = useState('') // text Editor
  const [icon, setIcon] = useState('');

  const shead = useRef()
  const [message, setMessage] = useState('')

  const servicesCollection = collection(database, 'services')

  const stripHtmlTags = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};

const strippedDetails = stripHtmlTags(value);
  
  const Add = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const obj = {
        icon : icon,
        heading: shead.current.value,
        details:strippedDetails
      }

      const docRef = await addDoc(servicesCollection, obj)
      console.log("Service added with ID: ", docRef.id)
      setMessage("Service added successfully!")
     setIcon('')
      e.target.reset()
      // Optional: Redirect after successful addition
      setValue('')
    } catch (error) {
      console.error("Error adding service: ", error)
      setMessage("Error adding service. Please try again.")
    }
  }


  return (<>
 <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
             <h2 className='text-center alert-success'> Add Services</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={Add}>

            <div className="form-group">
    <label><b>Icon</b></label>
    <input 
        type="text" 
        value={icon} 
        onChange={(e) => setIcon(e.target.value)} 
        className='form-control' 
        placeholder="Enter icon class name (e.g., 'fas fa-camera')"
    />
</div>

              <div className="form-group">
                <label><b>Heading</b></label>
                <input type="text" ref={shead} className='form-control' required />
              </div>
              <div className="form-group">
                <label><b>Details</b></label>
                <ReactQuill 
            theme="snow" 
            value={value} 
            onChange={setValue} 
            style={{height:'150px'}}
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
        />              </div>
        
        
        <br/>
              <button type="submit" className='btn btn-info btn-block mt-3'>Add Services</button>
            </form>

            <hr/>

            
          </div>
        </div>
      </div>
    </div>      
    </>
  )

  
}
