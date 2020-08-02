/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button, SpanInfo, RightContainer, FormContainer,
} from '../CadastroDefault/styles';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading/index';
import categoriasRepository from '../../../repositories/categorias';

function Categoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((response) => {
        setCategorias(response);
      });
  }, []);

  return (
    <>
      <PageDefault>

        <FormContainer>
          <h1> Cadastro de Categoria</h1>

          <form onSubmit={function handleSubmit(submit) {
            submit.preventDefault();
            if (values.titulo !== '') {
              categoriasRepository.create({
                titulo: values.titulo,
                descricao: values.descricao,
              }).then(() => {
                // if (response.status === 201) {
                toast.success('🤘 Categoria cadastrada com sucesso!', {
                  position: 'bottom-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

                setCategorias([
                  ...categorias,
                  values,
                ]);
                // } else {
                //   toast.error('💀 Erro ao cadastrar categoria!', {
                //     position: 'bottom-center',
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //   });
                // }
              });

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
