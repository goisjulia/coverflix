import React, { useEffect, useState } from 'react';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault/index';
import Loading from '../../components/Loading/index';
import Carousel from '../../components/Carousel/index';
import BannerMain from '../../components/BannerMain/index';
import { CarouselContainer, LoadingContainer } from './styles';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categorias) => {
        setDadosIniciais(categorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (

    <PageDefault paddingMain={`${0}px`}>
      {dadosIniciais.length === 0 && (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
      )}

      <CarouselContainer>

        {dadosIniciais.map((categoria, index) => {
          if (index === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={"Quando foi lançada como single, 'Bohemian Rhapsody' se tornou um sucesso comercial, ficando no topo da UK Singles Chart por nove semanas e vendendo mais de um milhão de cópias até o fim de janeiro de 1976. Ela alcançou o topo das listas em diversos outros mercados, incluindo Canadá, Austrália, Nova Zelândia, Irlanda e Holanda."}
                />

                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
          if (categoria.videos.length !== 0) {
            return (
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            );
          }
          return (
            <div key={categoria.id} />
          );
        })}
      </CarouselContainer>
    </PageDefault>
  );
}

export default Home;
