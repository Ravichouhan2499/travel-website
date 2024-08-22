import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function ViewBlog() {

    const navigate= useNavigate()

    const Edit =()=>
    {
        navigate('/admin/editBlog')

    }

  return (


    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-12">
            <div className="form-container">
                <h2 className="text-center alert-success">Veiw Blog Details Packages</h2>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Place</th>
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
                                <td>Details</td>
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
