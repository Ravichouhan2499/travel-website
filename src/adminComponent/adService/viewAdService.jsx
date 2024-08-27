import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './viewAdService.css'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { database } from '../../Config'

export default function ViewServices() {

    const navigate = useNavigate()
    const [Services, setServices] = useState([])

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'services'))
            const packageData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setServices(packageData)
        } catch (error) {
            console.error("Error fetching packages: ", error)
        }
    }

    const Edit = (id) => {
        navigate(`/admin/editServices/${id}`)
    }

    const Delete = async (id) => {
        if (window.confirm("Are you sure you want to delete this package?")) {
            try {
                await deleteDoc(doc(database, 'services', id))
                setServices(Services.filter(srv => srv.id !== id))
            } catch (error) {
                console.error("Error deleting package: ", error)
            }
        }
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
                                <th>Heading</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Services.map((srv, index) => (
                                        <tr key={srv.id}>
                                            <td>{index + 1}</td>
                                            <td>{srv.heading}</td>
                                            <td>{srv.details}</td>
                                           
                                            <td>
                                                <FaRegEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => Edit(srv.id)} /> &nbsp; &nbsp;
                                                <MdDeleteForever style={{ color: 'red', cursor: 'pointer' }} onClick={() => Delete(srv.id)} />
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>



    
    
  )
}
