// src/components/Sidebar.js
import React from 'react';
import UserProfile from './UserProfile';
import './styles/Sidebar.css';

function Sidebar({ onChangePage, user }) {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => onChangePage('dashboard')}>Dashboard</li>
        <li onClick={() => onChangePage('denuncias')}>Denúncias</li>
        <li onClick={() => onChangePage('servicosPegados')}>Serviços Aceitos</li>
        <li onClick={() => onChangePage('arquivados')}>Arquivados</li>
      </ul>
      <div className="sidebar-footer">
        <UserProfile user={user} onClick={() => onChangePage('perfil')} />
      </div>
    </nav>
  );
}

export default Sidebar;
