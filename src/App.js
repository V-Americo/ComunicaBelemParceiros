import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Denuncias from './components/Denuncias';
import Finalizados from './components/Finalizados';
import ServicosPegados from './components/ServicosPegados';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import './App.css';
import denunciasData from './data/denuncias.json';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);
  const [denunciasRecentes, setDenunciasRecentes] = useState([]);
  const [denunciasDoMes, setDenunciasDoMes] = useState([]);
  const [denunciasMaisDeMes, setDenunciasMaisDeMes] = useState([]);
  const [denunciasAceitas, setDenunciasAceitas] = useState([]);
  const [servicosFinalizados, setServicosFinalizados] = useState([]);

  useEffect(() => {
    const carregarImagens = (denuncias) => {
      return denuncias.map(denuncia => ({
        ...denuncia,
        foto: require(`./assets/${denuncia.foto}`)
      }));
    };

    setDenunciasRecentes(carregarImagens(denunciasData.denunciasRecentes));
    setDenunciasDoMes(carregarImagens(denunciasData.denunciasDoMes));
    setDenunciasMaisDeMes(carregarImagens(denunciasData.denunciasMaisDeMes));
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    setPage('dashboard');
  };

  const handleAceitarServico = (denuncia, categoria) => {
    setDenunciasAceitas([...denunciasAceitas, denuncia]);
    if (categoria === 'recentes') {
      setDenunciasRecentes(denunciasRecentes.filter(d => d !== denuncia));
    } else if (categoria === 'doMes') {
      setDenunciasDoMes(denunciasDoMes.filter(d => d !== denuncia));
    } else if (categoria === 'maisDeMes') {
      setDenunciasMaisDeMes(denunciasMaisDeMes.filter(d => d !== denuncia));
    }
  };

  const handleConcluirServico = (servico) => {
    setServicosFinalizados([...servicosFinalizados, servico]);
    setDenunciasAceitas(denunciasAceitas.filter(s => s !== servico));
  };

  const totalDenuncias = denunciasRecentes.length + denunciasDoMes.length + denunciasMaisDeMes.length + denunciasAceitas.length + servicosFinalizados.length;
  const denunciasPendentes = [...denunciasRecentes, ...denunciasDoMes, ...denunciasMaisDeMes];

  const renderPage = () => {
    switch(page) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return (
          <Dashboard 
            totalDenuncias={totalDenuncias}
            denunciasPendentes={denunciasPendentes.length}
            servicosAceitos={denunciasAceitas.length}
            servicosFinalizados={servicosFinalizados.length}
          />
        );
      case 'denuncias':
        return (
          <Denuncias 
            denunciasRecentes={denunciasRecentes} 
            denunciasDoMes={denunciasDoMes}
            denunciasMaisDeMes={denunciasMaisDeMes}
            onAceitarServico={handleAceitarServico} 
          />
        );
      case 'Finalizados':
        return <Finalizados servicos={servicosFinalizados} />;
      case 'servicosPegados':
        return <ServicosPegados servicos={denunciasAceitas} onConcluirServico={handleConcluirServico} />;
      case 'perfil':
        return (
          <UserDetails 
            user={user}
            denunciasPendentes={denunciasPendentes}
            servicosAceitos={denunciasAceitas}
            servicosFinalizados={servicosFinalizados}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
        {user && <Sidebar onChangePage={setPage} user={user} />}
        <div className="content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
