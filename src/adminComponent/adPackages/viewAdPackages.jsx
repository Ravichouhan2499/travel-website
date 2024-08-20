import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ViewPackages() {

    const navigate= useNavigate()

    const Edit =()=>
    {
        navigate('/admin/editPackages')

    }

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="form-container">
          <h2 className='text-center alert-success'> View Packages Details</h2>
    

          <table className='table'>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Image</th>
                  <th>Place</th>
                  <th>Days</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className='btn btn-info' onClick={Edit} > Edit</button>||<button className='btn btn-danger'>Delete</button></td>

                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div> 
  )
}
