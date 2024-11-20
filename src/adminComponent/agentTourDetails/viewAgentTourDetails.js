import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../../Config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Loader from '../../Components/loaderComponent/loader';
import './viewAgentTour.css'; // Import the custom CSS for additional styling

export default function ViewAgentTour() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch groups from Firestore
    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const groupsCollection = collection(database, 'Groups');
                const snapshot = await getDocs(groupsCollection);
                const groupsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
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
            setGroups(groups.filter(group => group.id !== id));
            alert('Group deleted successfully!');
        } catch (error) {
            console.error('Error deleting group:', error);
            alert('Failed to delete group. Please try again.');
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
                        <div className="table-responsive"> {/* Add table-responsive */}
                            <table className="table table-bordered table-hover mt-3">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Image</th>
                                        <th>Tour Name</th>
                                        <th>Payment</th>
                                        <th>Number of People</th>
                                        <th>Agent ID</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groups.map(group => (
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
                                            <td>{group.payment.toFixed(2)}</td>
                                            <td>{group.numberOfPeople}</td>
                                            <td>{group.agentId}</td>
                                            <td>{new Date(group.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button
                                                        onClick={() => navigate(`/admin/editGroupDetails/${group.id}`, { state: group })}
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
