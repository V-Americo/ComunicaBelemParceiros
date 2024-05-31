import React from 'react';
import './styles/Dashboard.css';

function Dashboard({ totalDenuncias, denunciasPendentes, servicosAceitos, servicosFinalizados }) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="divisao">
        <div className="cards-dashboard">
          <h3>Total de Denúncias</h3>
          <p>{totalDenuncias}</p>
        </div>
        <div className="cards-dashboard">
          <h3>Denúncias Pendentes</h3>
          <p>{denunciasPendentes}</p>
        </div>
        <div className="cards-dashboard">
          <h3>Serviços Aceitos</h3>
          <p>{servicosAceitos}</p>
        </div>
        <div className="cards-dashboard">
          <h3>Serviços Finalizados</h3>
          <p>{servicosFinalizados}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
