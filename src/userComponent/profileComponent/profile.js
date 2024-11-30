import React, { useState, useEffect } from "react";
import { Auth, database } from "../../Config"; // Import Firebase config
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./profile.css";
import Loader from "../../Components/loaderComponent/loader";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data from Firebase Authentication and Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = Auth.currentUser;
      if (!currentUser) {
        console.error("No authenticated user found.");
        alert("Unable to fetch user data. Please log in again.");
        return;
      }

      setUser(currentUser);
      setFormData({
        displayName: currentUser.displayName || "",
        email: currentUser.email || "",
        phone: "",
      });

      // Fetch additional details from Firestore
      try {
        const userDoc = doc(database, "agent", currentUser.uid);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          setFormData((prev) => ({ ...prev, ...userSnapshot.data() }));
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("Failed to fetch additional user data.");
      }
    };

    fetchUserData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save updates to Firebase
  const handleSave = async () => {
    if (!formData.phone.match(/^\d{10}$/)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (user) {
      try {
        // Update Firebase Authentication profile
        await updateProfile(user, {
          displayName: formData.displayName,
        });

        // Update Firestore document
        const userDoc = doc(database, "agent", user.uid);
        await setDoc(
          userDoc,
          {
            phone: formData.phone,
          },
          { merge: true }
        );

        setIsEditing(false);
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile.");
      }
    }
  };

  if (!user) {
    return <p><Loader/></p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Agent Profile</h2>
        <p>Manage your account details below</p>
      </div>
      {isEditing ? (
        <div className="profile-form">
          <label>
            Name:
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>

          <div className="profile-buttons">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {formData.displayName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone || "Not provided"}
          </p>
          <div className="profile-buttons">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
