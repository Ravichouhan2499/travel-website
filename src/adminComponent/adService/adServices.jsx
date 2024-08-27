
import React, { useRef, useState } from 'react'
import { database } from '../../Config'
import { addDoc, collection } from 'firebase/firestore'

export default function AdService() {

  const shead = useRef()
  const sDetails = useRef()
  const [message, setMessage] = useState('')

  const servicesCollection = collection(database, 'services')
  
  const Add = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const obj = {
        heading: shead.current.value,
        details: sDetails.current.value
      }

      const docRef = await addDoc(servicesCollection, obj)
      console.log("Service added with ID: ", docRef.id)
      setMessage("Service added successfully!")

      e.target.reset()
      // Optional: Redirect after successful addition
      
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
                <label><b>Heading</b></label>
                <input type="text" ref={shead} className='form-control' required />
              </div>
              <div className="form-group">
                <label><b>Details</b></label>
                <textarea ref={sDetails} className='details' style={{ width: '100%', height: '150px' }} required />
              </div>
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
