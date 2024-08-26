import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdService() {
  
    const navigate = useNavigate()

    const Edit =()=>
    {
       navigate('/editadServices')
    }
    
  return (<>
 <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className='text-center alert-success'> Add Services</h2>
            <form>
              <div className="form-group">
                <label htmlFor="image"><b>Service Icon</b></label>
                <input type="file" id="image" name="image" className="form-control-file" required/>
              </div>
              <div className="form-group">
                <label htmlFor="place"><b>Heading</b></label>
                <input type="text" id="place" className='form-control' required/>
              </div>
              <div className="form-group">
                <label htmlFor="days"><b>Details</b></label>
               <textarea type='text' className='details'  style={{ width: '100%', height: '150px' }} />
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
