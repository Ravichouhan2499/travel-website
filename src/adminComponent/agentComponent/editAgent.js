import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { database } from '../../Config'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export default function EditAgentDetails() {
    const { id } = useParams()  // Get the agent ID from the URL
    const navigate = useNavigate()
    
    const [agName, setAgName] = useState('')
    const [agEmail, setAgEmail] = useState('')
    const [agNumber, setAgNumber] = useState('')
    const [agPwd, setAgPwd] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    // Fetch the agent details on component mount
    useEffect(() => {
        const fetchAgentDetails = async () => {
            try {
                const docRef = doc(database, 'agent', id)
                const docSnap = await getDoc(docRef)

                console.log("datais", docSnap )

                if (docSnap.exists()) {
                    const agentData = docSnap.data()
                    setAgName(agentData.name)
                    setAgEmail(agentData.email)
                    setAgNumber(agentData.contact)
                } else {
                    console.log('No such agent!')
                }
            } catch (error) {
                console.error("Error fetching agent details: ", error)
            }
        }

        fetchAgentDetails()
    }, [id])

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleUpdateAgent = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')
        setError('')

        try {
            const agentRef = doc(database, 'agent', id)

            // Update Firestore document with new data
            await updateDoc(agentRef, {
                name: agName,
                email: agEmail,
                contact: agNumber,
                ...(agPwd && { password: agPwd }) // Only update password if provided
            })

            setMessage('Agent updated successfully!')
            navigate('/admin/viewAgent')  // Redirect to the agents list page

        } catch (error) {
            console.error('Error updating agent:', error)
            setError('Error updating agent details. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-container">
                        <h2 className="text-center alert-success">Edit Agent Details</h2>
                        <hr />
                        {message && <div className="alert alert-success">{message}</div>}
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleUpdateAgent}>
                            <div className="form-group">
                                <label><b>Agent Name</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={agName}
                                    onChange={(e) => setAgName(e.target.value)}
                                    required
                                    placeholder="Enter agent's Name"
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Agent Email</b></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={agEmail}
                                    onChange={(e) => setAgEmail(e.target.value)}
                                    required
                                    placeholder="Enter agent's email"
                                />
                            </div>
                            <div className="form-group">
                                <label><b>Phone Number</b></label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={agNumber}
                                    onChange={(e) => setAgNumber(e.target.value)}
                                    required
                                    placeholder="Enter agent's phone number"
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit phone number"
                                />
                            </div>
                            <div className="form-group position-relative">
                                <label><b>Password</b></label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        value={agPwd}
                                        onChange={(e) => setAgPwd(e.target.value)}
                                        placeholder="Enter new password (Leave empty to keep current)"
                                        minLength="6"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-info btn-block mt-3"
                                disabled={loading}
                            >
                                {loading ? 'Updating...' : 'Update Agent'}
                            </button>
                        </form>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
