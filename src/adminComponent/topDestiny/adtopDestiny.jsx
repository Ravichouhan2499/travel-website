import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdTopDestiny() {

    const navigate = useNavigate()

    const Edit =()=>
    {
        navigate('/edittopdestiny')
    }

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-success'> Add Destination Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="image"><b>Image</b></label>
              <input type="file" id="image" name="image" className="form-control-file" required/>
            </div>
            <div className="form-group">
              <label htmlFor="place"><b>Name</b></label>
              <input type="text"  className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="days"><b>Place</b></label>
              <input type='number' className='form-control' required/>
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