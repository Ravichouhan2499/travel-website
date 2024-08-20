import React from 'react'

export default function EditadServices() {

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-success'> Edit Services Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="image"><b>Image</b></label>
              <input type="file" id="image" name="image" className="form-control-file" required/>
            </div>
            <div className="form-group">
              <label htmlFor="place"><b>Heading</b></label>
              <input type="text" id="place" className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="days"><b>Details</b></label>
              <input type='number' id="days" className='form-control' required/>
            </div>
            
            <button type="submit" className='btn btn-info btn-block mt-3'>Add Edited Services Details</button>
          </form>

          <hr/>

        
        </div>
      </div>
    </div>
  </div>    
  )
}
