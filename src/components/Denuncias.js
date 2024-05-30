// src/components/Denuncias.js
import React from 'react';
import DenunciaCard from './DenunciaCard';
import './styles/Denuncia.css';

const denunciasRecentes = [
  // Dados fictícios para exemplificação
  { titulo: 'Vazamento na Travessa Mauriti', data: '2024-05-20', foto: require('../assets/DenunciaFcticia.jpeg'), rua: 'Travessa Mauriti', numero: '1006', complemento: 'Entre Everdosa e Pedro Miranda', pontRef: 'Em frente a casa da farinha', descricao: 'Vazamento está prejudicando moradores' },
  { titulo: 'Vazamento na Rua B', data: '2024-05-22', foto: require('../assets/DenunciaFcticia.jpeg'), endereco: 'Rua B, 456' },
];

const denunciasDoMes = [
  // { titulo: 'Vazamento na Rua C', data: '2024-05-10', foto: 'caminho/para/foto3.jpg', endereco: 'Rua C, 789' },
];

const denunciasMaisDeMes = [
  // { titulo: 'Vazamento na Rua D', data: '2024-04-15', foto: 'caminho/para/foto4.jpg', endereco: 'Rua D, 101' },
];

function Denuncias() {
  return (
    <div className="denuncias-container">
      <h2>Denúncias Recentes</h2>
      <div className="denuncias-list">
        {denunciasRecentes.map((denuncia, index) => (
          <DenunciaCard key={index} denuncia={denuncia} />
        ))}
      </div>

      <h2>Denúncias do Mês</h2>
      <div className="denuncias-list">
        {denunciasDoMes.map((denuncia, index) => (
          <DenunciaCard key={index} denuncia={denuncia} />
        ))}
      </div>

      <h2>Denúncias há mais de um Mês</h2>
      <div className="denuncias-list">
        {denunciasMaisDeMes.map((denuncia, index) => (
          <DenunciaCard key={index} denuncia={denuncia} />
        ))}
      </div>
    </div>
  );
}

export default Denuncias;
