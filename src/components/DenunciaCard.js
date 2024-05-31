import React, { useState } from 'react';
import './styles/DenunciaCard.css';

function DenunciaCard({ denuncia, onAceitarServico }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handlePegarServico = () => {
    onAceitarServico(denuncia);
  };

  return (
    <div className="denuncia-card">
      <div className="card-header" onClick={handleOpen}>
        <h3>{denuncia.Vazamento} {denuncia.titulo}</h3>
        <p>{denuncia.data}</p>
      </div>
      {isOpen && (
        <div className="card-details">
          <img src={denuncia.foto} alt="Denúncia" className="denuncia-foto" />
          <div className="info-group">
            <p><strong>Rua:</strong> {denuncia.rua}, {denuncia.numero}</p>
            <p><strong>Complemento:</strong> {denuncia.complemento}</p>
            <p><strong>Ponto de Referência:</strong> {denuncia.pontRef}</p>
            <p><strong>Descrição:</strong> {denuncia.descricao}</p>
          </div>
          <button onClick={handlePegarServico}>Aceitar Serviço</button>
        </div>
      )}
    </div>
  );
}

export default DenunciaCard;
