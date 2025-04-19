import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../ParaQuem/ParaQuem.css";

export default function ParaQuem() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const itens = [
    "✅ Já tentou de tudo e não vê resultados",
    "✅ Vive o efeito sanfona",
    "✅ Não tem tempo, motivação ou orientação certa",
    "✅ Quer emagrecer com saúde, energia e autoestima",
    "✅ Quer seguir um plano claro, direto e comprovado"
  ];

  return (
    <section className="py-5 bg-black text-white paraquem-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-4 text-white">Para quem é o The Evolution Method?</h2>
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
                  className="list-group-item itemBranca"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
