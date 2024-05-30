// src/components/ServicosPegados.js
import React, { useState } from 'react';
import './styles/ServicosPegados.css';

const servicosPegados = [
  // Dados fictícios para exemplificação
  { id: 1, titulo: 'Reparo na Rua A', status: 'Em andamento' },
  { id: 2, titulo: 'Reparo na Rua B', status: 'Em andamento' },
  { id: 3, titulo: 'Reparo na Rua C', status: 'Concluído' },
];

function ServicosPegados() {
  const [servicos, setServicos] = useState(servicosPegados);

  const handleUpdateStatus = (id, newStatus) => {
    setServicos(servicos.map(servico => 
      servico.id === id ? { ...servico, status: newStatus } : servico
    ));
  };

  return (
    <div className="servicos-pegados">
      <h2>Serviços Aceitos</h2>
      <div className="servicos-list">
        {servicos.map(servico => (
          <div key={servico.id} className="servico-card">
            <h3>{servico.titulo}</h3>
            <p>Status: {servico.status}</p>
            {servico.status !== 'Concluído' && (
              <button onClick={() => handleUpdateStatus(servico.id, 'Concluído')}>Marcar como Concluído</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicosPegados;
