import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Blog() {

  const bplace = useRef()
  const bDetails = useRef()

  const Add =(e)=>
  {
e.preventDefault()

var obj = {
  place : bplace.current.value,
  Details : bDetails.current.value
}
console.log("Obj is " , obj)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className='text-center alert-success'> Add Blog Details</h2>
            <form>
              <div className="form-group">
                <label ><b>Image</b></label>
                <input type="file" className="form-control-file" required/>
              </div>
              <div className="form-group">
                <label ><b>Place</b></label>
                <input type="text"  ref={bplace} className='form-control' required/>
              </div>
              <div className="form-group">
                <label ><b>Details</b></label>
               <textarea type='text'  ref={bDetails} style={{ width: '100%', height: '150px' }} />
                </div>
              
              <button type="submit" className='btn btn-info btn-block mt-3'>Add Blog Details</button>
            </form>

            <hr/>

           
          </div>
        </div>
      </div>
    </div> 
  )
}
