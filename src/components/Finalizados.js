// src/components/Finalizados.js
import React from 'react';
import './styles/Finalizados.css';

function Finalizados({ servicos }) {
  return (
    <div className="finalizados">
      <h2>Serviços Finalizados</h2>
      <div className="servicos-list">
        {servicos.map((servico, index) => (
          <div key={index} className="servico-card">
            <h3>{servico.titulo}</h3>

            <img src={servico.foto} alt="Denúncia" className="denuncia-foto" />


            <p> <strong> Rua </strong>: {servico.rua}, {servico.numero}</p>
            <p> <strong> Complemento: </strong> {servico.complemento}</p>
            <p> <strong> Ponto de Referência: </strong> {servico.pontRef}</p>
            <p> <strong> Descrição: </strong> {servico.descricao}</p>
            <p> <strong> Status: </strong> Concluído</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Finalizados;
