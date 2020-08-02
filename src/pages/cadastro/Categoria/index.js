/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer, SpanInfo, RightContainer, Button,
} from './styles';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading/index';

function Categoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

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
      id: values.length + 1,
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
            if (values.titulo !== '') {
              addCategoria(values);

              clearForm(valoresIniciais);
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
              value={values.titulo}
              name="titulo"
              onChange={handleChange}
              required
            />

            <FormField
              label="Descrição"
              type="textarea"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />

            <SpanInfo> * Campo obrigatório</SpanInfo>
            <RightContainer>
              <Button>
                Cadastrar
              </Button>
            </RightContainer>
            {categorias.length === 0 && (
              <Loading />
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
