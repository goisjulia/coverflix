import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Dropdown from '../Dropdown';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="CoverFlix" className="Logo" />
      </Link>
      <Dropdown titulo="Cadastro" links={[{ href: '/cadastro/categoria', titulo: 'Categoria' }, { href: '/cadastro/video', titulo: 'Vídeo' }]} />
    </nav>
  );
}

export default Menu;
