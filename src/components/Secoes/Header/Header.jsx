import React, { useEffect, useState } from 'react';
import Preco from '../Preco/Preco'; // Importe o componente Preco
import logo from '../../../assets/images/logo.png';
import "./Header.css";

export default function Header({ timeLeft }) {

    return (
        <div>
            <div className="alerta-topo">
                ⏰ Oferta por tempo limitado: <strong className='transparent'>Garanta seu acesso com desconto!</strong>
                <span className="contador">
                    📅 {timeLeft.days} dias, ⌛ {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                </span>
            </div>

            {/* Seção do Header */}
            <section className="section1 pedding-top section-header transparent d-flex justify-content-center">
                <div className="container transparent d-flex align-items-end">
                    <div className="row transparent">
                        <div className="transparent logo-header">
                            <img src={logo} alt="Logo" />
                        </div>
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
        </div>
    );
};
