import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../Config";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import Loader from "../../Components/loaderComponent/loader";
import "./agentDetails.css";

const AgentDetails = () => {
  const { id } = useParams(); // Agent ID from URL
  const [agent, setAgent] = useState(null);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      await fetchAgentDetails();
      await fetchAgentTours();
      setLoading(false);
    };
    fetchDetails();
  }, []);

  // Fetch agent details from Firestore
  const fetchAgentDetails = async () => {
    try {
      const agentDoc = await getDoc(doc(database, "agent", id));
      if (agentDoc.exists()) {
        setAgent(agentDoc.data());
      } else {
        alert("Agent not found!");
      }
    } catch (error) {
      console.error("Error fetching agent details:", error);
    }
  };

  // Fetch tours for the given agent ID
  const fetchAgentTours = async () => {
    try {
      const toursQuery = query(collection(database, "Groups"), where("agentId", "==", id));
      const tourSnapshots = await getDocs(toursQuery);

      if (!tourSnapshots.empty) {
        const toursData = tourSnapshots.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTours(toursData);
      } else {
        console.log("No tours found for this agent.");
      }
    } catch (error) {
      console.error("Error fetching agent tours:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="agent-details-container">
      <h2>Agent Details</h2>
      {agent ? (
        <div className="agent-info">
          <p>
            <strong>Name:</strong> {agent.name}
          </p>
          <p>
            <strong>Email:</strong> {agent.email}
          </p>
          <p>
            <strong>Contact:</strong> {agent.contact}
          </p>
        </div>
      ) : (
        <p>Agent not found.</p>
      )}

      <h3>Tours Managed by {agent?.name}</h3>
      {tours.length > 0 ? (
        <div className="tours-table-container">
          <table className="tours-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Tour Name</th>
                <th>Number of people</th>
                 <th>Price</th>
                 <th>Payment Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour, index) => (
                <tr key={tour.id}>
                                      <td>{index + 1}</td>

                     <td>
                                                {tour.imageUrl ? (
                                                    <img
                                                        src={tour.imageUrl}
                                                        alt="Group"
                                                        className="table-image"
                                                    />
                                                ) : (
                                                    'No Image'
                                                )}
                                            </td>
                  <td>{tour.tour}</td>
                  <td>{tour.numberOfPeople}</td>
                  <td>₹{tour.payment}</td>
                  <td>{tour.paymentStatus}</td>

                  <td>{new Date(tour.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No tours available for this agent.</p>
      )}
    </div>
  );
};

export default AgentDetails;
