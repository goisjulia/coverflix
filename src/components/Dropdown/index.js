import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import DropdownBase from './styles';

function Dropdown({ titulo, links }) {
  return (
    <DropdownBase className="dropdown">
      <DropdownBase.Button
        className="dropbtn"
      >
        {titulo}
        <Icon path={mdiChevronDown} size={1} />
      </DropdownBase.Button>
      <DropdownBase.ListItens
        className="dropdown-content"
      >
        {links.map((link) => (
          <DropdownBase.Item href={link.href} key={`${link.titulo}`}>{link.titulo}</DropdownBase.Item>
        ))}
      </DropdownBase.ListItens>
    </DropdownBase>
  );
}

Dropdown.propTypes = {
  titulo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    titulo: PropTypes.string,
  })).isRequired,
};

export default Dropdown;
