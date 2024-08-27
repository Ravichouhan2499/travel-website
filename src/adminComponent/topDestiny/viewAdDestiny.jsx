import React, { useState, useEffect } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { database } from '../../Config'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

export default function ViewTopDestiny() {
    const navigate = useNavigate()
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetchDestinations()
    }, [])

    const fetchDestinations = async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'destinations'))
            const destinationData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setDestinations(destinationData)
        } catch (error) {
            console.error("Error fetching destinations: ", error)
        }
    }

    const Edit = (id) => {
        navigate(`/admin/editDestiny/${id}`)
    }

    const Delete = async (id) => {
        if (window.confirm("Are you sure you want to delete this destination?")) {
            try {
                await deleteDoc(doc(database, 'destinations', id))
                setDestinations(destinations.filter(dest => dest.id !== id))
            } catch (error) {
                console.error("Error deleting destination: ", error)
            }
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">View Destination Details</h2>
                        <hr/>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sno.</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Place</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {destinations.map((dest, index) => (
                                        <tr key={dest.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={dest.destimageUrl} alt={dest.destname} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                            </td>
                                            <td>{dest.destname}</td>
                                            <td>{dest.destplace}</td>
                                            <td>
                                                <FaRegEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => Edit(dest.id)} /> &nbsp; &nbsp;
                                                <MdDeleteForever style={{ color: 'red', cursor: 'pointer' }} onClick={() => Delete(dest.id)} />
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
