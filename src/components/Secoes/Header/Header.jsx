import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo.png';
import "./Header.css";

export default function Header() {

    const [timeLeft, setTimeLeft] = useState(15 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer)
    }
        , []);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };
    return (
        <div>
            <div className="alerta-topo">
                ⏰ Oferta por tempo limitado: <strong className='transparent'>Garanta seu acesso com desconto!</strong>
                <span className="contador">⏳ {formatTime(timeLeft)}</span>
            </div>
            {/* SECTION 1 */}
            <section className="section1 pedding-top section-header transparent d-flex">
                <div className="container transparent d-flex align-items-end">
                    <div className="row align-items-center transparent">
                       <div className="transparent">
                            <h1 className="display-5 anton-regular color-white transparent">
                                PROTOCOLO DE EMAGRECIMENTO ACELERADO: RESULTADOS REAIS <span className="corPrimaria transparent">EM ATÉ 30 DIAS</span>
                            </h1>

                            <p className="lead mt-3 color-white transparent">
                                Comprovado por dezenas de alunos e baseado em experiência real: elimine até 10kg em 30 dias com um passo a passo estruturado e acompanhamento de verdade.
                            </p>

                            <a href="#precos" className="botaoPrincipal">
                                Quero Evoluir Agora
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="mb-4 corPrimaria">Entenda como você pode começar a evoluir hoje:</h2>
                    <div className="ratio ratio-16x9 youtube-video">
                        <iframe
                            src="https://www.youtube.com/embed/7FSCfEJR3lQ?si=kbuvWBjB0-94RK3s"
                            title="Vídeo"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};
