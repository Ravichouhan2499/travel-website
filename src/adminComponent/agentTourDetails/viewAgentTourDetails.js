import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../../Config';
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    getDoc,
} from 'firebase/firestore';
import Loader from '../../Components/loaderComponent/loader';
import './viewAgentTour.css';

export default function ViewAgentTour() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch groups and their associated agent names
    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const groupsCollection = collection(database, 'Groups');
                const snapshot = await getDocs(groupsCollection);

                const groupsData = await Promise.all(
                    snapshot.docs.map(async (groupDoc) => {
                        const group = { id: groupDoc.id, ...groupDoc.data() };

                        // Fetch the agent's name from the "avantiaaAgents" collection
                        if (group.agentId) {
                            try {
                                const agentRef = doc(database, 'agent', group.agentId);
                                const agentDoc = await getDoc(agentRef);
                                group.agentName = agentDoc.exists()
                                    ? agentDoc.data().name
                                    : 'Unknown Agent';
                            } catch (error) {
                                console.error('Error fetching agent:', error);
                                group.agentName = 'Unknown Agent';
                            }
                        } else {
                            group.agentName = 'Unknown Agent';
                        }

                        return group;
                    })
                );

                setGroups(groupsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching groups:', error);
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);

    // Delete group
    const deleteGroup = async (id) => {
        try {
            await deleteDoc(doc(database, 'Groups', id));
            setGroups(groups.filter((group) => group.id !== id));
            alert('Group deleted successfully!');
        } catch (error) {
            console.error('Error deleting group:', error);
            alert('Failed to delete group. Please try again.');
        }
    };

    // Update payment status
    const updatePaymentStatus = async (groupId, status) => {
        try {
            const groupRef = doc(database, 'Groups', groupId);
            await updateDoc(groupRef, { paymentStatus: status });

            // Update local state
            setGroups(
                groups.map((group) =>
                    group.id === groupId ? { ...group, paymentStatus: status } : group
                )
            );

            alert('Payment status updated successfully!');
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
    };

    // Function to render payment status with color codes
    const renderPaymentStatus = (status) => {
        switch (status) {
            case 'pending':
                return <span className="badge badge-warning">Pending</span>;
            case 'accepted':
                return <span className="badge badge-success">Accepted</span>;
            case 'cancelled':
                return <span className="badge badge-danger">Cancelled</span>;
            default:
                return <span className="badge badge-secondary">Unknown</span>;
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h2 className="text-center alert-primary mt-3">Agent Tour Details</h2>
                    {groups.length === 0 ? (
                        <div className="text-center alert alert-warning">No groups found!</div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mt-3">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Image</th>
                                        <th>Tour Name</th>
                                        <th>Payment</th>
                                        <th>Number of People</th>
                                        <th>Agent Name</th> {/* Display Agent Name */}
                                        <th>Agent ID</th> {/* Display Agent ID */}
                                        <th>Created At</th>
                                        <th>Payment Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groups.map((group) => (
                                        <tr key={group.id}>
                                            <td>
                                                {group.imageUrl ? (
                                                    <img
                                                        src={group.imageUrl}
                                                        alt="Group"
                                                        className="table-image"
                                                    />
                                                ) : (
                                                    'No Image'
                                                )}
                                            </td>
                                            <td>{group.tour}</td>
                                            <td>{group.payment?.toFixed(2) || 'N/A'}</td>
                                            <td>{group.numberOfPeople || 'N/A'}</td>
                                            <td>{group.agentName}</td> {/* Display Agent Name */}
                                            <td>{group.agentId}</td> {/* Display Agent ID */}
                                            <td>
                                                {group.createdAt
                                                    ? new Date(group.createdAt).toLocaleDateString()
                                                    : 'N/A'}
                                            </td>
                                            <td>
                                                {renderPaymentStatus(
                                                    group.paymentStatus || 'pending'
                                                )}
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            navigate(
                                                                `/admin/editGroupDetails/${group.id}`,
                                                                { state: group }
                                                            )
                                                        }
                                                        className="btn btn-info btn-sm"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteGroup(group.id)}
                                                        className="btn btn-danger btn-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                    <div>
                                                        <select
                                                            value={group.paymentStatus || 'pending'}
                                                            onChange={(e) =>
                                                                updatePaymentStatus(
                                                                    group.id,
                                                                    e.target.value
                                                                )
                                                            }
                                                            className="form-control payment-status-select"
                                                        >
                                                            <option value="pending">Pending</option>
                                                            <option value="accepted">Accepted</option>
                                                            <option value="cancelled">Cancelled</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
