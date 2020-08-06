import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Dropdown from '../Dropdown';
import Button from '../Button/index';

function Menu() {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <nav className="Menu">
        {location.pathname === '/player'
          && (
            <Button.NoBorderHover
              type="button"
              className="button icon-left"
              onClick={history.goBack}
            >
              <Icon
                path={mdiChevronLeft}
                size={1}
                color="white"
              />
              {' '}
              voltar
            </Button.NoBorderHover>
          )}
        <Link to="/">
          <img src={Logo} alt="CoverFlix" className="Logo" />
        </Link>
        <Dropdown titulo="Cadastro" className="dropdown" links={[{ href: '/cadastro/categoria', titulo: 'Categoria' }, { href: '/cadastro/video', titulo: 'Vídeo' }]} />
      </nav>
      <div className="navbar">
        <Link to="/cadastro/categoria"> Categoria</Link>
        <Link to="/cadastro/video"> Vídeo</Link>
      </div>
    </>
  );
}

export default Menu;
