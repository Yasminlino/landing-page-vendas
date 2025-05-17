import React from "react";
import '../FabricioDeSouza/SecaoFabricio.css';

export const SecaoFabricio = () => {
  return (
    <section className="section1 py-5 corPrimaria text-white section-Fabricio">
      <div className="container">
        <div className="row align-items-center">
          {/* Imagem */}
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <img
              className="img-fabricio"
              alt="Fabrício de Sousa"
              src={`${process.env.PUBLIC_URL}/static/media/Fabricio-de-Souza.webp`}
              width="300"
              height="400"
              style={{ objectFit: "cover" }}
            />

          </div>

          {/* Texto */}
          <div className="col-lg-7">
            <h2 className="display-5 mb-3 tituloLaranja">Fabrício de Sousa</h2>
            <h4>@FabricioDeSouza</h4>
            <p className="lead mb-3">
              De <strong >ex-obeso desacreditado</strong> a <strong className='>mentor e referência nacional</strong> no emagrecimento.

              Fabrício perdeu <strong className='>30kg em apenas 3 meses</strong> e hoje é o criador do The Evolution Method —
              um dos programas mais eficazes e acessíveis do país, focado em transformação física, mental e emocional.
              <br />
              <br />
              Sua missão é mostrar que é possível mudar completamente o corpo e a vida com os métodos certos,
              sem dietas malucas ou treinos impossíveis.
              Fabrício perdeu <strong>30kg em apenas 3 meses</strong> e hoje é o criador do The Evolution Method —
              um dos programas mais eficazes e acessíveis do país, focado em transformação física, mental e emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
