import React, { useEffect } from 'react';
import imagem from '../../../assets/images/MethodEvolution.jpg';
import logo from '../../../assets/images/logo.png';
import "./Header.css";

export default function Header(){
    return (
        <div>
            {/* SECTION 1 */}
            <section className="py-5 section1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={logo} alt="Logo Método Evolution" className="logo-img mb-3" />

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

                        <div className="col-md-6 text-center mt-2">
                            <img className="imgPrincipal img-fluid" src={imagem} alt="Método Evolution" />
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
