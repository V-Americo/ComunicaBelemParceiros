// src/components/ServicosPegados.js
import React from 'react';
import './styles/ServicosPegados.css';

function ServicosPegados({ servicos, onConcluirServico }) {
  return (
    <div className="servicos-pegados">
      <h2>Serviços Aceitos</h2>
      <div className="servicos-list">
        {servicos.map((servico, index) => (
          <div key={index} className="servico-card">
            <h3>{servico.titulo}</h3>

            <img src={servico.foto} alt="Denúncia" className="denuncia-foto" />

            <p><strong> Rua </strong>: {servico.rua}, {servico.numero}</p>
            <p><strong> Complemento: </strong>: {servico.complemento}</p>
            <p><strong> Ponto de Referência: </strong>{servico.pontRef}</p>
            <p><strong> Descrição: </strong>: {servico.descricao}</p>
            <p><strong> Status: </strong>: Em andamento</p>
            <button onClick={() => onConcluirServico(servico)}>Marcar como Concluído</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicosPegados;
