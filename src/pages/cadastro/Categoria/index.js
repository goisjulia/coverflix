/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';

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
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [dadosCategoria, setCategoria] = useState(valoresIniciais);

  function setDadosCategoria(chave, valor) {
    setCategoria({
      ...dadosCategoria,
      [chave]: valor,
    });
  }

  function alterarCategoria(dadoNovo) {
    setDadosCategoria(
      dadoNovo.target.getAttribute('name'),
      dadoNovo.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://thecoverflix.herokuapp.com/categorias';

    fetch(URL).then(async (response) => {
      const retorno = await response.json();
      setCategorias([
        ...retorno,
      ]);
    });
  }, []);

  function addCategoria(categoria) {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://thecoverflix.herokuapp.com/categorias';

    const novaCategoria = {
      id: dadosCategoria.length + 1,
      nome: categoria.nome,
      descricao: categoria.descricao,
    };

    fetch(URL,
      {
        method: 'post',
        headers: {
          // eslint-disable-next-line quote-props
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaCategoria),
      }).then(async (response) => {
      if (response.status === 201) {
        setCategorias([
          ...categorias,
          categoria,
        ]);
      }
    });
  }

  return (
    <>
      <PageDefault>
        <h1> Cadastro de Categoria</h1>

        <FormContainer>

          <form onSubmit={function handleSubmit(submit) {
            submit.preventDefault();
            addCategoria(dadosCategoria);
            setCategoria(valoresIniciais);
          }}
          >

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

            {categorias.length === 0 && (
            <div>
              Loading...
            </div>
            )}

            <ul>
              {categorias.map((categoria, index) => (
                <li key={`${categoria}${index}`}>
                  {categoria.nome}
                </li>
              ))}
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
