import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import { Piano, Linha, Tecla } from './styles';

function NotFound() {
  return (
    <>
      <Menu />
      <Piano>
        <Linha />
        <Tecla> PÁGINA NÃO ENCONTRADA </Tecla>

        <Linha />
        <Tecla as={Link} className="teclaHover" to="/"> CLIQUE AQUI PARA VOLTAR AO INÍCIO </Tecla>
      </Piano>
    </>
  );
}

export default NotFound;
