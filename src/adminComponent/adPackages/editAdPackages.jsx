import React from 'react'

export default function EditPackages() {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-danger'> Edit Packages details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="image"><b>Image</b></label>
              <input type="file" id="image" name="image" className="form-control-file" required/>
            </div>
            <div className="form-group">
              <label htmlFor="place"><b>Place</b></label>
              <input type="text" id="place" className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="days"><b>Days</b></label>
              <input type='number' id="days" className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="person"><b>Person</b></label>
              <input type="number" id="person" className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="rate"><b>Rate</b></label>
              <input type="number" id="rate" className='form-control' required/>
            </div>
            <div className="form-group">
              <label htmlFor="price"><b>Price</b></label>
              <input type="number" id="price" className='form-control' required/>
            </div>
            <button type="submit" className='btn btn-primary btn-block mt-3'>Add Edited Package Details</button>
          </form>

          <hr/>


        </div>
      </div>
    </div>
  </div>

  )
}