import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../../../assets/images/logo.webp';
import imagemDesktop from '../../../assets/images/Imagem-capa-desktop.webp';
import imagemMobile from '../../../assets/images/Imagem-capa-mobile2.webp';
import './Header.css';

export default function Header({ timeLeft }) {
  // Define imagem de fundo responsiva
  const backgroundImage =
    window.innerWidth < 500
      ? imagemMobile
      : imagemDesktop;

  return (
    <div>
      <Helmet>
        {/* Preload imagens */}
        <link rel="preload" as="image" href={imagemDesktop} />
        <link rel="preload" as="image" href={logo} />
      </Helmet>

      {/* Alerta topo */}
      <div className="alerta-topo">
        <span role="img" aria-label="Relógio">⏰</span> Oferta por tempo limitado: <strong>Garanta seu acesso com desconto!</strong>
        <span className="contador">
          <span role="img" aria-label="Calendário">📅</span> {timeLeft.days} dias, <span role="img" aria-label="Relógio de areia">⌛</span> {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </div>

      {/* Header */}
      <section
        className="section1 section-header d-flex justify-content-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '90vh'
        }}
      >
        <div className="container d-flex align-items-end">
          <div className="row header-row-fixa">
            <div className="logo-header">
              <img
                src={logo}
                alt="Logo"
                width="128"
                height="112"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="display-5 anton-regular corAmarela">
                ELIMINE <span className="color-white">ATÉ 10KG</span> EM <span>30 DIAS</span> COMO O MÉTODO QUE <span className="color-white">REALMENTE FUNCIONA.</span>
              </h1>
              <p className="lead mt-3 color-white texto-header">
                Você não precisa sofrer, passar fome ou viver na academia.
                O Método Evolution é <span className="corAmarela">leve, estratégico e se encaixa no seu dia a dia.</span> Mesmo que você não goste de academia. Mesmo que sua rotina seja corrida.
                Esse método foi feito pra você que quer emagrecer de forma definitiva.
              </p>
              <a href="#precos" className="botaoPrincipal botaoPrincipalHeader">
                Quero o resultado que sempre sonhei!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
