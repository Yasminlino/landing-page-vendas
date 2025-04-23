import React, { useEffect } from "react";
import {
  IoFitnessOutline,
  IoRestaurantOutline,
  IoBulbOutline
} from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EvolutionMethod.css"; // Adicionaremos o CSS customizado aqui

export default function Method() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-5 method-section section1 text-white">
      <div className="container">
        {/* Título e descrição */}
        <div className="row align-items-center mb-5">
          <div className="col-md-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">O que é o The Evolution Method?</h2>
            <p className="lead text-light">
              Um programa completo de emagrecimento e transformação corporal que combina treinos personalizados, alimentação descomplicada e estratégias mentais para manter a motivação. Tudo adaptado à sua rotina e ao seu estilo de vida.
            </p>
          </div>
        </div>

        {/* Subtítulo */}
        <h2 className="display-6 text-center mb-5 text-warning" data-aos="fade-up">
          O que ele oferece
        </h2>

        {/* Cards */}
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card custom-card h-100">
              <IoFitnessOutline className="icon transparent" />
              <h5 className="card-title">Treinos Personalizados</h5>
              <p className="card-text">✅ Ajustados ao seu nível, mesmo que você esteja começando.</p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card custom-card h-100">
              <IoRestaurantOutline className="icon transparent" />
              <h5 className="card-title">Alimentação Descomplicada</h5>
              <p className="card-text">✅ Prática, acessível e sem terrorismo nutricional.</p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card custom-card h-100">
              <IoBulbOutline className="icon transparent" />
              <h5 className="card-title">Mentalidade Forte</h5>
              <p className="card-text">✅ Suplementação consciente e fortalecimento da sua mentalidade.</p>
            </div>
          </div>
        </div>
      </div>

        <div className="d-flex justify-content-center mt-5 text-center">
          <a href="#precos" className="botaoPrincipal">
            Aproveitar os benefícios
          </a>
        </div>
    </section>
  );
}
