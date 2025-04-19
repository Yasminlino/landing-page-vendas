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
    icon: <IoScaleOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Eliminar de 6 a 10kg de gordura"
  },
  {
    icon: <IoShirtOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Sentir suas roupas voltarem a servir"
  },
  {
    icon: <IoFlashOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Ter mais disposição, leveza e confiança"
  },
  {
    icon: <IoRocketOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Começar a sua melhor fase"
  },
  {
    icon: <IoPeopleOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Inspirar quem te acompanha"
  },
  {
    icon: <IoHeartOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Melhorar sua saúde cardiovascular"
  },
  {
    icon: <IoBodyOutline className="mb-3 text-warning icones" aria-hidden="true" />,
    text: "Tonificar e definir o corpo"
  },
  {
    icon: <IoSunnyOutline className="mb-3 text-warning icones" aria-hidden="true" />,
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
            <p className="lead transparent">Com apenas 30 dias, essas mudanças já podem acontecer na sua vida:</p>
          </div>
        </div>

        <div className="row g-4 text-center transparent">
          {conquistas.map((item, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 transparent" key={index}>
              <div className="card-transparente h-100 p-4 shadow-sm">
                {item.icon}
                <p className="fs-5 mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
