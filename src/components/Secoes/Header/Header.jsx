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
                            <h1 className="display-5 anton-regular transparent corAmarela">
                                ELIMINE <span className="color-white transparent">ATÉ 10KG</span> EM <span className="transparent">30 DIAS</span> COMO O MÉTODO QUE <span className="color-white transparent">REALMENTE FUNCIONA.</span>
                            </h1>

                            <p className="lead mt-3 color-white transparent texto-header">
                                Se torne o aluno de quem já mudou o corpo e a mente de <span className='corAmarela transparent'>milhares de pessoas em projetos de emagrecimento</span> e tenha o resultado que você buscou a vida inteira nos próximos 30 dias.
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
