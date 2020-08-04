/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import 'react-toastify/dist/ReactToastify.css';
import {
  SpanInfo, RightContainer, FormContainer,
  Table, LoadingContainer,
} from '../CadastroDefault/styles';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading/index';
import categoriasRepository from '../../../repositories/categorias';
import Button from '../../../components/Button/index';

function Categoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    id: '',
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

  function deleteCategory(categoria) {
    categoriasRepository.getWithVideos(categoria)
      .then((response) => {
        if (response[0].videos.length > 0) {
          toast.error('💀 Erro ao deletar categoria! Existem vídeos vinculados a ela.', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          categoriasRepository
            .deleteOne(categoria)
            .then(() => {
              categorias.splice(categoria - 1, 1);
              setCategorias([
                ...categorias,
              ]);

              toast.success('🤘 Categoria deletada com sucesso!', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
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
              categoriasRepository.create({
                titulo: values.titulo,
                descricao: values.descricao,
              }).then((response) => {
                toast.success('🤘 Categoria cadastrada com sucesso!', {
                  position: 'bottom-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

                values.id = response.id;

                setCategorias([
                  ...categorias,
                  values,
                ]);
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
              <Button.Default>
                Cadastrar
              </Button.Default>
            </RightContainer>

            {categorias.length === 0 && (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            )}

            {categorias.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th> Título </th>
                    <th> Descrição </th>
                    <th> Ações </th>
                  </tr>
                </thead>
                <tbody>
                  {categorias.map((categoria, index) => (
                    <tr key={`${categoria}${index}`}>
                      <td>
                        {categoria.titulo}
                      </td>
                      <td>
                        {categoria.descricao}
                      </td>
                      <td>
                        <Button.NoBorder
                          // eslint-disable-next-line react/jsx-no-bind
                          onClick={function handleClick(event) {
                            event.preventDefault();
                            deleteCategory(categoria.id);
                          }}
                        >
                          <Icon path={mdiClose} size={1} color="red" title="Remover" />
                        </Button.NoBorder>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            <ToastContainer />
          </form>
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default Categoria;
