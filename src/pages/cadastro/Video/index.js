import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button, SpanInfo, RightContainer, FormContainer,
} from '../CadastroDefault/styles';

function Video() {
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

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
          <h1> Cadastro de Vídeo</h1>

          <form onSubmit={(event) => {
            event.preventDefault();

            const categoriaId = categorias
              .find((categoria) => categoria.titulo === values.categoria);

            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaId.id,
            })
              .then(() => {
                toast.success('🤘 Vídeo cadastrado com sucesso!', {
                  position: 'bottom-center',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

                clearForm(valoresIniciais);

                // history.push('/');
              });
          }}
          >
            <FormField
              label="Título do Vídeo*"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="URL*"
              name="url"
              value={values.url}
              onChange={handleChange}
            />

            <FormField
              label="Categoria*"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />
            <SpanInfo> * Campo obrigatório</SpanInfo>
            <RightContainer>
              <Button>
                Cadastrar
              </Button>
            </RightContainer>
          </form>

          <Link to="/cadastro/categoria">
            Cadastrar Categoria
          </Link>
          <ToastContainer />
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default Video;
