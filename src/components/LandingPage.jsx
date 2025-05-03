import React, { useState, useEffect } from 'react';
import Header from './Secoes/Header/Header';
import Method from './Secoes/Method/EvolutionMethod';
import ParaQuem from './Secoes/ParaQuem/ParaQuem';
import Conquistas from './Secoes/Conquistas/Conquistas';
import AntesEDepois from './Secoes/AntesEDepois/AntesEDepois';
import Depoimentos from './Secoes/Depoimentos/Depoimentos';
import { SecaoFabricio } from './Secoes/FabricioDeSouza/SecaoFabricio';
import Footer from './Secoes/Rodape/Rodape';
import PerguntasFrequentes from './Secoes/PerguntasFrequentes/PerguntasFrequentes';
import Preco from './Secoes/Preco/Preco';
import './LandingPage.css';

const LandingPage = () => {
  const promoEndDate = new Date('2025-05-03');
  promoEndDate.setDate(promoEndDate.getDate() + 30);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = promoEndDate - now;

      if (difference > 0) {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        // Função para formatar com dois dígitos
        const format = (num) => String(num).padStart(2, '0');

        setTimeLeft({
          days: format(days),
          hours: format(hours),
          minutes: format(minutes),
          seconds: format(seconds),
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header timeLeft={timeLeft} />
      <Method />
      <ParaQuem />
      <Conquistas />
      <AntesEDepois />
      <Depoimentos />
      <SecaoFabricio />
      <PerguntasFrequentes />
      <Preco timeLeft={timeLeft} />
      <Footer />
    </div>
  );
};

export default LandingPage;
