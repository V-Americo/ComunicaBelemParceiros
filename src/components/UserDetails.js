// src/components/UserDetails.js
import React from 'react';
import './styles/UserDetails.css';

function UserDetails({ user }) {
  return (
    <div className="user-details-page">
      <div className="profile-section">

        <h2 className='title'>Perfil do Usuário</h2>

        <div className="profile-details-info">
          <img src={require('../assets/victor.png')} alt="Profile" className="profile-image-info" />
          <div className="details">
            <h3>{user}</h3>
            <p>Função: Administrativo ServPred</p>
            <p>Email: volveregroup@gmail.com</p>
            <p>Telefone: (91) 98995-8771</p>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="services-container">
          <h2>Serviços Em Aberto</h2>
          <div className="service-card">
            <h3>RUA TAL TAL TAL</h3>
            <p>Descrição do serviço em aberto...</p>
          </div>
          <div className="service-card">
            <h3>RUA TAL TAL TAL</h3>
            <p>Descrição do serviço em aberto...</p>
          </div>
          <h2>Serviço Finalizado</h2>
          <div className="service-card">
            <h3>RUA TAL TAL TAL</h3>
            <p>Descrição do serviço finalizado...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
