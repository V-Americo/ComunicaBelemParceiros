import React from 'react';
import DenunciaCard from './DenunciaCard';
import './styles/Denuncia.css';

function Denuncias({ denunciasRecentes, denunciasDoMes, denunciasMaisDeMes, onAceitarServico }) {
  return (
    <div className="denuncias-container">
      <h2>Denúncias Recentes</h2>
      <div className="denuncias-list">
        {denunciasRecentes.map((denuncia, index) => (
          <DenunciaCard key={index} denuncia={denuncia} onAceitarServico={() => onAceitarServico(denuncia, 'recentes')} />
        ))}
      </div>

      <h2>Denúncias do Mês</h2>
      <div className="denuncias-list">
        {denunciasDoMes.map((denuncia, index) => (
          <DenunciaCard key={index} denuncia={denuncia} onAceitarServico={() => onAceitarServico(denuncia, 'doMes')} />
        ))}
      </div>

      <h2>Denúncias há mais de um Mês</h2>
      <div className="denuncias-list">
        {denunciasMaisDeMes.map((denuncia, index) => (
          <DenunciaCard key={index} denuncia={denuncia} onAceitarServico={() => onAceitarServico(denuncia, 'maisDeMes')} />
        ))}
      </div>
    </div>
  );
}

export default Denuncias;
