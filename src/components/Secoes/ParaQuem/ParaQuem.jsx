import React, { useEffect } from "react";
import AOS from "aos";
import { FaCheck } from "react-icons/fa";
import "aos/dist/aos.css";
import "../ParaQuem/ParaQuem.css";

export default function ParaQuem() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const itens = [
    " Já tentou de tudo: Mesmo com inúmeras tentativas, ainda não encontrou um método que se encaixe perfeitamente na sua rotina.",
    " Busca mudança de verdade: Está cansado de soluções temporárias e quer uma transformação que vá além da balança.",
    " Valoriza a saúde e o bem-estar: Deseja emagrecer de forma inteligente, sem abrir mão do que gosta, respeitando o seu corpo e seus limites.",    
    " Está pronto para o comprometimento: Se você está disposto a seguir um passo a passo validado e experimentar uma nova abordagem, essa é a sua chance."
  ];

  return (
    <section className="py-5 bg-black text-white paraquem-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4 text-white">Para quem é o este Método?</h2>
            <p className="lead text-light">
              Descubra como o The Evolution Method pode transformar sua vida, ajudando você a emagrecer com saúde e alcançar seus objetivos.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <ul className="list-group list-group-dark">
              {itens.map((item, index) => (
                <li
                  className="itemBranca"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  key={index}
                >
                  <FaCheck style={{color: '#ff914d'}} />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
