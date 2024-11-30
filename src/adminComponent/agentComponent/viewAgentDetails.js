import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./viewAgenctDetails.css"; // Assuming you have a separate CSS file for agents view
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { database } from "../../Config";
import { collection, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Loader from "../../Components/loaderComponent/loader";

export default function ViewAgents() {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "agent"));
      const agentData = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .reverse();

      setAgents(agentData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching agents: ", error);
      setLoading(false);
    }
  };

  const Edit = (id) => {
    navigate(`/admin/editAgent/${id}`);
  };

  const ViewDetails = (id) => {
    navigate(`/admin/viewAgentDetails/${id}`);
  };

  const Delete = async (id) => {
    if (window.confirm("Are you sure you want to delete this agent?")) {
      try {
        const agentDocRef = doc(database, "agent", id);
        const agentDoc = await getDoc(agentDocRef);

        if (!agentDoc.exists()) {
          alert("Agent document not found.");
          return;
        }

        const agentData = agentDoc.data();
        if (agentData.isProtected) {
          alert("This agent is protected and cannot be deleted.");
          return;
        }

        await deleteDoc(agentDocRef);
        alert("Agent deleted successfully!");
        fetchAgents(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting agent:", error);
        alert("Error deleting agent. Please try again.");
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="form-container">
            <h2 className="text-center alert-success">View Agents Details</h2>
            <hr />
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>createdAt (m/d/y)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent, index) => (
                    <tr key={agent.id}>
                      <td>{index + 1}</td>
                      <td onClick={() => ViewDetails(agent.id)} style={{ cursor: "pointer", color:"purple" }}>
                        {agent.id}
                      </td>
                      <td>{agent.name}</td>
                      <td>{agent.email}</td>
                      <td>{agent.contact}</td>
                      <td>{new Date(agent.createdAt).toLocaleDateString()}</td>
                      <td>
                        <FaRegEdit style={{ color: "blue", cursor: "pointer" }} onClick={() => Edit(agent.id)} />{" "}
                        &nbsp; &nbsp;
                        <MdDeleteForever style={{ color: "red", cursor: "pointer" }} onClick={() => Delete(agent.id)} />
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
  );
}
