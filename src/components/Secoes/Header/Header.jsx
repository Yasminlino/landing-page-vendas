import React, { useEffect, useState } from 'react';
import imagem from '../../../assets/images/MethodEvolution.png';
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
            <section className="section1 pedding-top">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="row align-items-center">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-4 col-md-6 logo-container">
                                    <img src={logo} alt="Logo Método Evolution" className="logo-img mb-3 img-fluid" />
                                </div>

                                <div className="col-7 col-md-6 image-container mt-2">
                                    <img className="imgPrincipal img-fluid" src={imagem} alt="Método Evolution" />
                                </div>
                            </div>
                        </div>

                        <div className="">

                            <h1 className="display-5 anton-regular">
                                ELIMINE ATÉ <span className="corPrimaria">10KG EM 30 DIAS</span> com o método que realmente funciona.
                            </h1>

                            <p className="lead mt-3">
                                Chegou a hora de parar de tentar sozinha e começar a evoluir de verdade. Com orientação certa, disciplina e o método que mais transforma vidas, o seu resultado vem — e vem rápido.
                            </p>

                            <a href="#formulario" className="botaoPrincipal">
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
