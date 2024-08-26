import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdTopDestiny() {

    const tName = useRef()
    const tPlace = useRef()

    const Add =(e)=>
    { 
      e.preventDefault()

      var obj = {
        destname : tName.current.value,
        destplace : tPlace.current.value,
      }
      console.log("Destination obj is  :" , obj )

    }

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-success'> Add Destination Details</h2>
          <form onSubmit={Add}>
            <div className="form-group">
              <label ><b>Image</b></label>
              <input type="file"  className="form-control-file" required/>
            </div>
            <div className="form-group">
              <label ><b>Name</b></label>
              <input type="text"  ref={tName} className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="days"><b>Place</b></label>
              <input type='text' ref={tPlace} className='form-control' required/>
            </div>
            
            <button type="submit" className='btn btn-info btn-block mt-3'>Add Destination</button>
          </form>

          <hr/>

         
        </div>
      </div>
    </div>
  </div>    
  )
}
