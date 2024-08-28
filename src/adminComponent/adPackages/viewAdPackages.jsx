import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './viewAdpackages.css'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { database } from '../../Config'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

export default function ViewPackages() {
    const navigate = useNavigate()
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetchPackages()
    }, [])

    const fetchPackages = async () => {
        try {
            const querySnapshot = await getDocs(collection(database, 'Packages'))
            const packageData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })).reverse()
            setPackages(packageData)
        } catch (error) {
            console.error("Error fetching packages: ", error)
        }
    }

    const Edit = (id) => {
        navigate(`/admin/editPackages/${id}`)
    }

    const Delete = async (id) => {
        if (window.confirm("Are you sure you want to delete this package?")) {
            try {
                await deleteDoc(doc(database, 'Packages', id))
                setPackages(packages.filter(pkg => pkg.id !== id))
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
                        <h2 className="text-center alert-success">View Packages Details</h2>
                        <hr/>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sno.</th>
                                        <th>Image</th>
                                        <th>Location</th>
                                        <th>Place</th>
                                        <th>Days</th>
                                        <th>Person</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {packages.map((pkg, index) => ( 
                                        <tr key={pkg.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={pkg.pkimageUrl} alt={pkg.pkplace} style={{width: '50px', height: '50px', objectFit: 'cover'}} />
                                            </td>
                                            <td>{pkg.pkloc}</td>
                                            <td>{pkg.pkplace}</td>
                                            <td>{pkg.pkday}</td>
                                            <td>{pkg.pkperson}</td>
                                            <td>{pkg.pkprice}</td>
                                            <td>
                                                <FaRegEdit style={{ color: 'blue', cursor: 'pointer' }} onClick={() => Edit(pkg.id)} /> &nbsp; &nbsp;
                                                <MdDeleteForever style={{ color: 'red', cursor: 'pointer' }} onClick={() => Delete(pkg.id)} />
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