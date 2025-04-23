import React from "react";
import {
  IoScaleOutline,
  IoShirtOutline,
  IoFlashOutline,
  IoRocketOutline,
  IoPeopleOutline,
  IoHeartOutline,
  IoBodyOutline,
  IoSunnyOutline
} from "react-icons/io5";
import "./Conquistas.css";

const conquistas = [
  {
    icon: <IoScaleOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Eliminar de 6 a 10kg de gordura"
  },
  {
    icon: <IoShirtOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Sentir suas roupas voltarem a servir"
  },
  {
    icon: <IoFlashOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Ter mais disposição, leveza e confiança"
  },
  {
    icon: <IoRocketOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Começar a sua melhor fase"
  },
  {
    icon: <IoPeopleOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Inspirar quem te acompanha"
  },
  {
    icon: <IoHeartOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Melhorar sua saúde cardiovascular"
  },
  {
    icon: <IoBodyOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Tonificar e definir o corpo"
  },
  {
    icon: <IoSunnyOutline style={{color: '#ff914d'}} className="mb-3 transparent icones-conquistas" aria-hidden="true" />,
    text: "Acordar com mais energia e bom humor"
  }
];

export default function Conquistas() {
  return (
    <section className="py-5 section-conquistas">
      <div className="container transparent">
        <div className="row justify-content-center mb-4 transparent">
          <div className="col-lg-8 text-center transparent">
            <h2 className="display-5 mb-3 transparent tituloLaranja">O QUE VOCÊ VAI CONQUISTAR</h2>
            <p className="lead transparent color-white">Com apenas 30 dias, essas mudanças já podem acontecer na sua vida:</p>
          </div>
        </div>

        {/* Lista das conquistas */}
        <ul className=" list-group transparent">
          {conquistas.map((item, index) => (
            <li
              className="d-flex align-items-start transparent item-conquista"
              key={index}
            >
              <span className="transparent">{item.icon}</span>
              <span className="ms-3 transparent color-white ">{item.text}</span>
            </li>
          ))}
        </ul>
        <a href="#precos" className="botaoPrincipal">
          Quero Evoluir Agora
        </a>
      </div>
    </section>
  );
}