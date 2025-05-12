import React, { useEffect } from "react";
import {
  IoCompassOutline,
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
            <h2 className="display-4 titulo1 fw-bold mb-4 text-gradient">
              🎥 Dê o primeiro passo para mudar seu corpo e sua mente
            </h2>
            <p>
              Descubra no vídeo abaixo como o Método Evolution já transformou a vida de centenas de pessoas como você, que já estavam cansadas de tentar e falhar.
            </p>
            <div className="container">
              <div className="ratio ratio-16x9 youtube-video">
                <iframe
                  src="https://www.youtube.com/embed/7FSCfEJR3lQ?si=kbuvWBjB0-94RK3s"
                  title="Vídeo"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="caption text-center mt-3">
                Criado por Fabrício de Sousa, ex-gordo, atleta e mentor de centenas de pessoas com resultados comprovados.
              </p>
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
              <IoCompassOutline  className="icon transparent" />
              <h5 className="card-title">Clareza de Propósito</h5>
              <p className="card-text">
                Você precisa descobrir o seu porquê.
              </p>
              <p className="card-text">
                No curso, eu vou te conduzir a encontrar o seu verdadeiro motivo — aquele que vai te manter firme mesmo nos dias difíceis. Você vai virar a chave, assim como eu virei.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card custom-card h-100">
              <IoRestaurantOutline className="icon transparent" />
              <h5 className="card-title">Estratégia Real</h5>
              <p className="card-text">
                Eu vou te mostrar exatamente o que fazer, o que comer.
              </p>
              <p className="card-text">
                Você vai ter acesso ao meu passo a passo completo — a alimentação, a suplementação, os treinos, o cardio, tudo como eu fiz para perder 30kg em 3 meses. Sem mistério, sem modinha.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card custom-card h-100">
              <IoBulbOutline className="icon transparent" />
              <h5 className="card-title">Força Mental</h5>
              <p className="card-text">
                Reprograme sua mente e pare de se sabotar.
              </p>
              <p className="card-text">
                Você não precisa ter super poderes, você precisa estar ao lado de quem já passou pelo processo. Juntos vamos vencer a autossabotagem, fortalecer sua disciplina e criar uma nova mentalidade.
              </p>
            </div>
          </div>

        </div>
        <div className="row text-center transparent">
          <div className="mx-auto transparent" data-aos="fade-up">
            <p className="lead text-light transparent">
              Este não é só um curso, é a maneira uma simples e definitiva para transformar o seu corpo e sua mente de forma definitiva.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 text-center">
          <a href="#precos" className="botaoPrincipal">
            COMEÇAR AGORA!
          </a>
        </div>
      </div>
    </section>
  );
}
