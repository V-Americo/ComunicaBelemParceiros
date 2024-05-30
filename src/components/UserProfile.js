// src/components/UserProfile.js
import React from 'react';
import './styles/UserProfile.css';

function UserProfile({ user, onClick }) {
  return (
    <div className="user-profile" onClick={onClick}>
      <img src={require('../assets/victor.png')} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <h3>{user}</h3>
        <p>Função: Administrativo ServPred</p>
      </div>
    </div>
  );
}

export default UserProfile;
