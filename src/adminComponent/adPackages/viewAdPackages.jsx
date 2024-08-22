import React from 'react'
import { useNavigate } from 'react-router-dom'
import './viewAdpackages.css'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
export default function ViewPackages() {
    const navigate = useNavigate()

    const Edit = () => {
        navigate('/admin/editPackages')
    }

    return (
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-12">
              <div className="form-container">
                  <h2 className="text-center alert-success">View Packages  Details</h2>
                  <hr/>
                  <div className="table-responsive">
                      <table className="table table-bordered">
                          <thead>
                              <tr>
                                  <th>Sno.</th>
                                  <th>Image</th>
                                  <th>Name</th>
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
                                  <td>Image placeholder</td>
                                  <td>Ramm</td>
                                  <td>Indore</td>
                                  <td>5</td>
                                  <td>4.5</td>
                                  <td>16000</td>
                                  <td >
                                  <FaRegEdit   onClick={Edit}/> &nbsp; &nbsp;
                                  <MdDeleteForever   />
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