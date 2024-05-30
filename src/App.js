// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Denuncias from './components/Denuncias';
import Arquivados from './components/Arquivados';
import ServicosPegados from './components/ServicosPegados';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    setPage('dashboard');
  };

  const renderPage = () => {
    switch(page) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard />;
      case 'denuncias':
        return <Denuncias />;
      case 'arquivados':
        return <Arquivados />;
      case 'servicosPegados':
        return <ServicosPegados />;
      case 'perfil':
        return <UserDetails user={user} />;
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
