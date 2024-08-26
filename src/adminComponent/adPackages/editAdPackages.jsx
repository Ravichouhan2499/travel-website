import React from 'react'

export default function EditPackages() {

  const Update =()=>
  {

  }



  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-danger'> Edit Packages details</h2>
          <form onSubmit={Update}>
              <div className="form-group">
                <label htmlFor="image"><b>Image</b></label>
                <input type="file" accept="image/*" required/>
                {/* onChange={(e) => setImg(e.target.files[0])} */}
              </div>
              <div className="form-group">
                <label ><b>Place</b></label>
                <input type="text"   className='form-control' required/>
              </div>
              <div className="form-group">
                <label ><b>Days</b></label>
                <input type='number'   className='form-control' required/>
              </div>
              <div className="form-group">
                <label ><b>Person</b></label>
                <input type="number"  className='form-control' required/>
              </div>
             
              <div className="form-group">
                <label><b>Price</b></label>
                <input type="number"   className='form-control' required/>
              </div>
              <button type="submit" className='btn btn-info btn-block mt-3'>Add Package</button>
            </form>

          <hr/>


        </div>
      </div>
    </div>
  </div>

  )
}
