import React from "react";
import {
  IoScaleOutline,
  IoEyeOutline,
  IoFlashOutline,
  IoPeopleOutline,
  IoRocketOutline,
  IoBodyOutline,
  IoHeartOutline,
  IoSunnyOutline
} from "react-icons/io5";
import "./Conquistas.css";


const conquistas = [
  {
    icon: <IoScaleOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Eliminar de 6 a 10kg de gordura"
  },
  {
    icon: <IoEyeOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Olhar no espelho e finalmente gostar do que vê"
  },
  {
    icon: <IoFlashOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Não precisar mais se esconder nas fotos"
  },
  {
    icon: <IoPeopleOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Acabar com o medo de ser julgada pelos outros"
  },
  {
    icon: <IoRocketOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Recuperar a sua autoestima e ter mais autoridade"
  },
  {
    icon: <IoBodyOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Dominar e ter o controle do próprio corpo"
  },
  {
    icon: <IoHeartOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Se sentir mais desejada pelo parceiro/parceira"
  },
  {
    icon: <IoSunnyOutline style={{color: '#ff914d'}} className="icones-conquistas" aria-hidden="true" />,
    text: "Um novo estilo de vida"
  }
];

export default function Conquistas() {
  return (
    <section className="section1 py-5 section-conquistas">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 mb-3 tituloLaranja">O QUE VOCÊ VAI CONQUISTAR</h2>
            <p className="lead color-white">Com apenas 30 dias, essas mudanças já podem acontecer na sua vida:</p>
          </div>
        </div>

        {/* Lista das conquistas */}
        <ul className=" list-group">
          {conquistas.map((item, index) => (
            <li
              className="d-flex align-items-center transparent item-conquista"
              key={index}
            >
              <span>{item.icon}</span>
              <span className="ms-3 color-white ">{item.text}</span>
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