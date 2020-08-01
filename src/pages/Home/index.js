import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import HomeBase from './styles';

function Home() {
  const carousels = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [index] of dadosIniciais.categorias.entries()) {
    carousels.push(<Carousel
      key={index}
      ignoreFirstVideo
      category={dadosIniciais.categorias[index]}
    />);
  }

  return (
    <HomeBase>

      <div className="Home">

        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Quando foi lançada como single, 'Bohemian Rhapsody' se tornou um sucesso comercial, ficando no topo da UK Singles Chart por nove semanas e vendendo mais de um milhão de cópias até o fim de janeiro de 1976. Ela alcançou o topo das listas em diversos outros mercados, incluindo Canadá, Austrália, Nova Zelândia, Irlanda e Holanda."}
        />

        {carousels}

        <Footer />

      </div>
    </HomeBase>
  );
}

export default Home;
