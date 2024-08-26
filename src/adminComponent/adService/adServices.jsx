import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdService() {


  const shead = useRef()
  const sDetails = useRef()
  
    const Add =(e)=>
    {
      e.preventDefault()

      var obj = {
        heading :  shead.current.value,
        details : sDetails.current.value
      }

      console.log("Obj is :" , obj)
      e.target.reset()
    }
    
  return (<>
 <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className='text-center alert-success'> Add Services</h2>
            <form  onSubmit={Add}>
             
              <div className="form-group">
                <label ><b>Heading</b></label>
                <input type="text" ref={shead } className='form-control' required/>
              </div>
              <div className="form-group">
                <label><b>Details</b></label>
               <textarea type='text'ref={ sDetails} className='details'  style={{ width: '100%', height: '150px' }} />
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
