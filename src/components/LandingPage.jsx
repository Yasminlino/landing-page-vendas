import React, { useEffect } from 'react';
import Header from './Secoes/Header/Header';
import Method from './Secoes/Method/EvolutionMethod';
import ParaQuem from './Secoes/ParaQuem/ParaQuem';
import Conquistas from './Secoes/Conquistas/Conquistas';
import AntesEDepois from './Secoes/AntesEDepois/AntesEDepois';
import Depoimentos from './Secoes/Depoimentos/Depoimentos';
import { SecaoFabricio } from './Secoes/FabricioDeSouza/SecaoFabricio';
import Footer from './Secoes/Rodape/Rodape'
import PerguntasFrequentes from './Secoes/PerguntasFrequentes/PerguntasFrequentes';
import Preco from './Secoes/Preco/Preco'
import './LandingPage.css';

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Method />
      <ParaQuem />
      <Conquistas />
      <AntesEDepois />
      <Depoimentos />
      <SecaoFabricio />
      <PerguntasFrequentes />
      <Preco />
      <Footer />
    </div>
  );
};

export default LandingPage;
