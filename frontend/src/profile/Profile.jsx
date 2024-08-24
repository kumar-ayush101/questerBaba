import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import './Profile.css';
import axios from 'axios';

const Profile = () => {
  // const { userId } = useParams(); ye error de raha tha isliye localstorage ka use kar liya , purane user ki profile de raha tha
  const userId = localStorage.getItem('userId');
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getProfile?userId=${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (response.data.success) {
          setUser(response.data.respData);
        } else {
          console.log('Error:', response.data.message);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  
  const copyToClipboard = () => {
    if (user.username) {
      const profileText = `
        Username: ${user.username}
        Date of Birth: ${user.dob}
        Email: ${user.email}
        City: ${user.city}
        State: ${user.state}
      `;
      navigator.clipboard.writeText(profileText).then(() => {
        alert('Profile copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      {userId && (
        <p>
          <button onClick={copyToClipboard} className="copy-button">Copy</button>
        </p>
      )}
      {user.username ? (
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>State:</strong> {user.state}</p>
        </div>
      ) : (
        userId ? <p>Loading profile data...</p> : <p>No user profile selected.</p>
      )}
    </div>
  );
};

export default Profile;

