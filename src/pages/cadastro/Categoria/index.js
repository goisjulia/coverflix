/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import 'react-toastify/dist/ReactToastify.css';
import loading from '../../../assets/gif/loading.gif';
import {
  FormContainer, SpanInfo, Loading, RightContainer, Button,
} from './styles';

function Categoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
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

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://thecoverflix.herokuapp.com/categorias';

  useEffect(() => {
    fetch(URL).then(async (response) => {
      const retorno = await response.json();
      setCategorias([
        ...retorno,
      ]);
    });
  }, [URL]);

  function addCategoria(categoria) {
    const novaCategoria = {
      id: dadosCategoria.length + 1,
      titulo: categoria.titulo,
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

        toast.success('🤘 Categoria cadastrada com sucesso!', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('💀 Erro ao cadastrar categoria!', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }

  return (
    <>
      <PageDefault>

        <FormContainer>
          <h1> Cadastro de Categoria</h1>

          <form onSubmit={function handleSubmit(submit) {
            submit.preventDefault();
            if (dadosCategoria.titulo !== '') {
              addCategoria(dadosCategoria);
              setCategoria(valoresIniciais);
            } else {
              toast.warning('👻 Campo(s) obrigatório(s) em branco!', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }}
          >

            <FormField
              label="Nome da categoria*"
              type="text"
              value={dadosCategoria.titulo}
              name="titulo"
              onChange={alterarCategoria}
              required
            />

            <FormField
              label="Descrição"
              type="textarea"
              value={dadosCategoria.descricao}
              name="descricao"
              onChange={alterarCategoria}
            />

            <SpanInfo> * Campo obrigatório</SpanInfo>
            <RightContainer>
              <Button>
                Cadastrar
              </Button>
            </RightContainer>
            {categorias.length === 0 && (
              <Loading>
                <img src={loading} alt="Carregando..." />
              </Loading>
            )}
            <ul>
              {categorias.map((categoria, index) => (
                <li key={`${categoria}${index}`}>
                  {categoria.titulo}
                </li>
              ))}
            </ul>
            <ToastContainer />
          </form>
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default Categoria;
