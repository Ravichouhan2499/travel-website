import React from 'react'
import { useNavigate } from 'react-router-dom'
import './viewAdService.css'

export default function ViewServices() {

    const navigate= useNavigate()

    const Edit =()=>
    {
        navigate('/admin/editservices')

    }
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-12">
            <div className="form-container">
                <h2 className="text-center alert-success">View Services Details</h2>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Image</th>
                                <th>Heading</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Image placeholder</td>
                                <td>Services</td>
                                <td>About</td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-2" onClick={Edit}>Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>



    
    
  )
}
