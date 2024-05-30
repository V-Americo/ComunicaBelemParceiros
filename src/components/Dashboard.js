// src/components/Dashboard.js
import React from 'react';
import './styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="divisao">
        <div className="cards-dashboard">
          <h3>Total de Denúncias</h3>
          <p>120</p>
        </div>
        <div className="cards-dashboard">
          <h3>Denúncias Pendentes</h3>
          <p>45</p>
        </div>
        <div className="cards-dashboard">
          <h3>Serviços Aceitos</h3>
          <p>30</p>
        </div>
        <div className="cards-dashboard">
          <h3>Serviços Finalizados</h3>
          <p>25</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
