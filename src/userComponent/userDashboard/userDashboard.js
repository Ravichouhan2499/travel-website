import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore'; // Firestore methods
import { Auth, database } from '../../Config'; // Import Firebase config
import ViewGroups from '../tourComponent/viewTourDetails';
import BlogComponent from '../../Pages/userComponent/userComponent';
import './userDashboard.css';
import Loader from '../../Components/loaderComponent/loader';

export default function AgentDashboard() {
    const [agentName, setAgentName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAgentData = async () => {
            setLoading(true);
            try {
                const user = Auth.currentUser;
                if (user) {
                    // Reference the agent's document using the logged-in user's UID
                    const agentDocRef = doc(database, 'agent', user.uid);
                    const agentDoc = await getDoc(agentDocRef);

                    if (agentDoc.exists()) {
                        const agentData = agentDoc.data();
                        setAgentName(agentData.name); // Set the agent's name
                    } else {
                        console.error('No such document for the agent!');
                        setAgentName('Unknown Agent');
                    }
                }
            } catch (error) {
                console.error('Error fetching agent data:', error);
                setAgentName('Error loading name');
            } finally {
                setLoading(false);
            }
        };

        fetchAgentData();
    }, []);

    return (
        <>
            <div className="dashboard-header">
                <h1>Welcome to the {agentName} Dashboard</h1>
                {loading ? (
                    <h2 className="user-name"><Loader/> </h2>
                ) : (
                    <h2 className="user-name"></h2>
                )}
            </div>
            <div className="dashboard-content">
                <ViewGroups />
                <BlogComponent />
            </div>
        </>
    );
}
