import React, { useEffect, useState } from 'react';
import Preco from '../Preco/Preco'; // Importe o componente Preco
import logo from '../../../assets/images/logo.webp';
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
                                Você não precisa sofrer, passar fome ou viver na academia. 
                                O Método Evolution é <span className='corAmarela transparent'>leve, estratégico e se encaixa no seu dia a dia.</span> Mesmo que você não goste de academia. Mesmo que sua rotina seja corrida. 
                                Esse método foi feito pra você que quer emagrecer de forma definitiva.
                            </p>
                            <a href="#precos" className="botaoPrincipal botaoPrincipalHeader">
                                Quero o resultado que sempre sonhei!
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
