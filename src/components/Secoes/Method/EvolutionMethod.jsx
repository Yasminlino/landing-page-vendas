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
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center" data-aos="fade-up">
            {/* <h2 className="mb-4 corPrimaria">Entenda como você pode começar a evoluir hoje:</h2> */}
            <h2 className="display-4 titulo1 fw-bold mb-4 text-gradient">
              🎥 Entenda como você pode começar a evoluir hoje:
            </h2>
            <div className="container">
              <div className="ratio ratio-16x9 youtube-video">
                <iframe
                  src="https://www.youtube.com/embed/7FSCfEJR3lQ?si=kbuvWBjB0-94RK3s"
                  title="Vídeo"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>


        {/* Subtítulo */}
        <div className="row">
          <div className="text-center" data-aos="fade-up">
            <h3 className="titulo2 display-6 fw-semibold mb-4 text-warning">
              3 pilares que vão transformar seu corpo e sua mente:
            </h3>
          </div>
        </div>

        {/* Cards */}
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card custom-card h-100">
              <IoFitnessOutline className="icon transparent" />
              <h5 className="card-title">Aceleradores naturais de metabolismo</h5>
              {/* <p className="card-text">✅ Recursos que potencializam sua queima de gordura, acelerando resultados mesmo sem treinos intensos.</p> */}
              <p className="card-text">✅ recursos que ativam seu corpo de forma natural, ajudando você a queimar gordura com mais facilidade, mesmo sem treinos exaustivos.</p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card custom-card h-100">
              <IoRestaurantOutline className="icon transparent" />
              <h5 className="card-title">Plano alimentar inteligente</h5>
              {/* <p className="card-text">✅ Uma dieta adaptável à sua rotina e preferências, sem cortes radicais ou restrições insuportáveis, apenas opções que funcionam para você.</p> */}
              <p className="card-text">✅ uma alimentação que cabe na sua rotina, que te dá energia e prazer, sem abrir mão do que você ama.</p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card custom-card h-100">
              <IoBulbOutline className="icon transparent" />
              <h5 className="card-title">Reprogramação mental</h5>
              {/* <p className="card-text">✅ Elimine sabotagens, supere bloqueios e desenvolva uma mentalidade vencedora que te impulsiona rumo ao sucesso.</p> */}
              <p className="card-text">✅ Deixe para trás a autossabotagem, reconquiste sua confiança e fortaleça sua vontade de vencer a cada passo.</p>
            </div>
          </div>

        </div>
        <div className="row text-center transparent">
          <div className="mx-auto transparent" data-aos="fade-up">
            <p className="lead text-light transparent">
              {/* Mais do que uma técnica para emagrecer, esse é um convite para redescobrir sua força, seu amor próprio e sua liberdade. Aprenda a emagrecer com leveza, sem sofrer — e conquiste um corpo que te faça sorrir todos os dias, sem medo de perder o que conquistou. */}
              Este não é só um curso, é uma verdadeira transformação de corpo e mente.
              <br />
              Aprenda a emagrecer com leveza, consistência e prazer e, o melhor, a manter os seus resultados por muito mais tempo, sem efeito sanfona.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 text-center">
          <a href="#precos" className="botaoPrincipal">
            Quero Evoluir Agora
          </a>
        </div>
      </div>
    </section>
  );
}
