import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../../../assets/images/logo.webp';
import "./Header.css";

export default function Header({ timeLeft }) {
  return (
    <div>
      <Helmet>
        <link rel="preload" as="image" href="../../../assets/images/Imagem-capa-desktop.webp" />
        <link rel="preload" as="image" href="../../../assets/images/Imagem-capa-mobile.webp" />
        <link rel="preload" as="image" href="../../../assets/images/Imagem-capa-mobile2.webp" />
      </Helmet>

      <div className="alerta-topo">
        <span role="img" aria-label="Relógio">⏰</span> Oferta por tempo limitado: <strong>Garanta seu acesso com desconto!</strong>
        <span className="contador">
          <span role="img" aria-label="Calendário">📅</span> {timeLeft.days} dias, <span role="img" aria-label="Relógio de areia">⌛</span> {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </div>

      <section className="section1 section-header d-flex justify-content-center">
        <div className="container d-flex align-items-end">
          <div className="row">
            <div className="logo-header">
              <img src={logo} alt="Logo Evolution" />
            </div>
            <div>
              <h1 className="display-5 anton-regular corAmarela">
                ELIMINE <span className="color-white">ATÉ 10KG</span> EM <span>30 DIAS</span> COM O MÉTODO QUE <span className="color-white">REALMENTE FUNCIONA.</span>
              </h1>
              <p className="lead mt-3 color-white texto-header">
                Você não precisa sofrer, passar fome ou viver na academia.
                O Método Evolution é <span className='corAmarela'>leve, estratégico e se encaixa no seu dia a dia.</span> Mesmo que você não goste de academia. Mesmo que sua rotina seja corrida.
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
