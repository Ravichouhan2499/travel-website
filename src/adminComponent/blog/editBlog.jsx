import React from 'react'

export default function EditBlog() {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-success'> Edit Blog Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="image"><b>Image</b></label>
              <input type="file"  name="image" className="form-control-file" required/>
            </div>
            <div className="form-group">
              <label htmlFor="place"><b>place</b></label>
              <input type="text" className='form-control' required/>
            </div>
            <div className="form-group">
                <label htmlFor="days"><b>Details</b></label>
               <textarea type='text' className='details'  style={{ width: '100%', height: '150px' }} />
                </div>
            
            <button type="submit" className='btn btn-info btn-block mt-3'>Add Edited Blog Details</button>
          </form>

          <hr/>

        
        </div>
      </div>
    </div>
  </div> 
  )
}
