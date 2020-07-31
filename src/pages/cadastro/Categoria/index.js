import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 50%;

  @media(max-width: 800px){
    width: 100%;
  }
`;

const Button = styled.button`
  color: var(--black);
  border: 1px solid var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

function Categoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [dadosCategoria, setCategoria] = useState(valoresIniciais);

  function setDadosCategoria(chave, valor) {
    setCategoria({
      ...dadosCategoria,
      [chave]: valor
    })
  }

  function alterarCategoria(dadoNovo) {
    setDadosCategoria(
      dadoNovo.target.getAttribute('name'),
      dadoNovo.target.value
    );
  }

  return (
    <>
      <PageDefault>
        <h1> Cadastro de Categoria</h1>

        <FormContainer>

          <form onSubmit={function handleSubmit(submit) {
            submit.preventDefault();
            setCategorias([
              ...categorias,
              dadosCategoria
            ]);
            setCategoria(valoresIniciais);
          }}>

            <FormField
              label="Nome da categoria"
              type="text"
              value={dadosCategoria.nome}
              name="nome"
              onChange={alterarCategoria}
            />

            <FormField
              label="Descrição"
              type="textarea"
              value={dadosCategoria.descricao}
              name="descricao"
              onChange={alterarCategoria}
            />

            <ul>
              {categorias.map((categoria, index) => {
                return (
                  <li key={`${categoria}${index}`}>
                    {categoria.nome}
                  </li>
                )
              })}
            </ul>

            <ButtonContainer>
              <Button>
                Cadastrar
            </Button>
            </ButtonContainer>

          </form>
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default Categoria;
