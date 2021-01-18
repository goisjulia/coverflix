import React, { useEffect, useState } from 'react';
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
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((response) => {
        setCategorias(response);
      });
    videosRepository
      .getAll()
      .then((response) => {
        setVideos(response);
      });
  }, []);

  // useEffect(() => {
  //   videosRepository
  //     .getAll()
  //     .then((response) => {
  //       setVideos(response);
  //     });
  // }, []);

  return (
    <>
      <PageDefault>
        <FormContainer>
          <h1> Cadastro de Vídeo</h1>

          <form onSubmit={(event) => {
            event.preventDefault();

            const categoriaId = categorias
              .find((categoria) => categoria.titulo === values.categoria);

            if (categoriaId === null || categoriaId === undefined) {
              toast.warning('🙈 Categoria não encontrada!', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              return;
            }

            if (values.titulo !== '' && values.url !== '' && values.categoria !== '') {
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

            {videos.length === 0 && (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            )}

            {videos.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th> Título </th>
                    <th> URL </th>
                    <th> Ações </th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video, index) => (
                    <tr key={`${video}${index}`}>
                      <td>
                        {video.titulo}
                      </td>
                      <td>
                        {video.url}
                      </td>
                      <td>
                        <Button.NoBorder
                          // eslint-disable-next-line react/jsx-no-bind
                          onClick={function handleClick(event) {
                            event.preventDefault();
                            // deleteCategory(categoria.id);
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

          </form>
          <ToastContainer />
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default Video;
