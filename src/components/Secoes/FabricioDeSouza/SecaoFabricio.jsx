import React from "react";
import '../FabricioDeSouza/SecaoFabricio.css';
import ImagemFabricio from "../../../assets/images/Fabricio-de-Souza.png";

export const SecaoFabricio = () => {
  return (
    <section className="section1 py-5 corPrimaria text-white section-Fabricio">
      <div className="container transparent">
        <div className="row align-items-center transparent">
           {/* Imagem */}
           <div className="col-lg-5 mb-4 mb-lg-0 text-center transparent">
            <img
              src={ImagemFabricio}
              alt="Fabrício de Sousa"
              className="transparent"
              style={{ maxHeight: "20ren", objectFit: "cover" }}
            />
          </div>

          {/* Texto */}
          <div className="col-lg-7 transparent">
            <h2 className="display-5 mb-3 transparent tituloLaranja">Fabrício de Sousa</h2>
            <h4 className='transparent'>@FabricioDeSouza</h4>
            <p className="lead mb-3 transparent">
              De <strong className='transparent'>ex-obeso desacreditado</strong> a <strong className='transparent'>mentor e referência nacional</strong> no emagrecimento.

              Fabrício perdeu <strong className='transparent'>30kg em apenas 3 meses</strong> e hoje é o criador do The Evolution Method —
              um dos programas mais eficazes e acessíveis do país, focado em transformação física, mental e emocional.
              <br />
              <br />
              Sua missão é mostrar que é possível mudar completamente o corpo e a vida com os métodos certos,
              sem dietas malucas ou treinos impossíveis.
              Fabrício perdeu <strong className='transparent'>30kg em apenas 3 meses</strong> e hoje é o criador do The Evolution Method —
              um dos programas mais eficazes e acessíveis do país, focado em transformação física, mental e emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
