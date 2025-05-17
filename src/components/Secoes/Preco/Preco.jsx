import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import './Preco.css';

export default function Preco({ timeLeft }) {
    const planos = [
        {
            nome: "Plano Básico",
            precoOriginal: "R$ 97,90",
            precoPromocional: "R$ 47,90",
            descricao: "Acesso ao método completo por 1 mês.",
            itens: [
                { icone: <FaCheck className="corLaranja" />, texto: "Curso em vídeos" },
                { icone: <FaCheck className="corLaranja" />, texto: "Planilha de cálculo metabólico" },
                { icone: <FaCheck className="corLaranja" />, texto: "E-book de receitas" },
                { icone: <FaTimes className="icone-vermelho" />, texto: "4 mentorias em grupo (em 30 dias)" },
                { icone: <FaTimes className="icone-vermelho" />, texto: "Acesso ao grupo de whatsapp" },
                { icone: <FaTimes className="icone-vermelho" />, texto: "Aplicativo de treinos" },
                { icone: <FaTimes className="icone-vermelho" />, texto: "Áudios motivacionais" }
            ],
            corCabecalho: "bg-warning",
            corBotao: "btn-warning",
            link: "https://sun.eduzz.com/1W3ZOV7PW2?cupom=METHODBASIC"
        },
        {
            nome: "Plano Intermediário",
            precoOriginal: "R$ 297,90",
            precoPromocional: "R$ 97,90",
            descricao: "Acesso ao método completo por 3 meses.",
            itens: [
                { icone: <FaCheck className="corLaranja" />, texto: "Curso em vídeos" },
                { icone: <FaCheck className="corLaranja" />, texto: "Planilha de cálculo metabólico" },
                { icone: <FaCheck className="corLaranja" />, texto: "E-book de receitas" },
                { icone: <FaCheck className="corLaranja" />, texto: "4 mentorias em grupo (em 30 dias)" },
                { icone: <FaCheck className="corLaranja" />, texto: "Acesso ao grupo de whatsapp" },
                { icone: <FaTimes className="icone-vermelho" />, texto: "Aplicativo de treinos" },
                { icone: <FaTimes className="icone-vermelho" />, texto: "Áudios motivacionais" }
            ],
            corCabecalho: "bg-primary",
            corBotao: "btn-dark",
            link: "https://sun.eduzz.com/8WPAPQRQWP?cupom=METHODINTERMEDIARY"
        },
        {
            nome: "Plano Premium",
            precoOriginal: "R$ 497,90",
            precoPromocional: "R$ 197,90",
            descricao: "Acesso ao método completo por 3 meses.",
            itens: [
                { icone: <FaCheck className="corLaranja me-2" />, texto: "Curso em vídeos" },
                { icone: <FaCheck className="corLaranja me-2" />, texto: "Planilha de cálculo metabólico" },
                { icone: <FaCheck className="corLaranja me-2" />, texto: "E-book de receitas" },
                { icone: <FaCheck className="corLaranja me-2" />, texto: "8 mentorias em grupo (em 30 dias)" },
                { icone: <FaCheck className="corLaranja me-2" />, texto: "Acesso ao grupo de whatsapp" },
                { icone: <FaCheck className="corLaranja me-2" />, texto: "Aplicativo de treinos" },
                { icone: <FaCheck className="corLaranja me-2" />, texto: "Áudios motivacionais" }
            ],
            corCabecalho: "bg-success",
            corBotao: "btn-success",
            link: "https://sun.eduzz.com/G961JNG5W1?cupom=METHODPREMIUM"
        }
    ];

    const isPromoActive =
        timeLeft.days > 0 ||
        timeLeft.hours > 0 ||
        timeLeft.minutes > 0 ||
        timeLeft.seconds > 0;

    return (
        <section className="py-5 text-center sectionPreco" id="precos">
            <div className="container">
                <h2 className="mb-4 color-white">Escolha o plano ideal para você</h2>
                <p className="mb-5 color-white">
                    Transforme sua vida com o método que já ajudou milhares de pessoas a emagrecer com saúde.
                </p>
                <div className="row">
                    {planos.map((plano, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm d-flex flex-column card-preco">
                                <div className={`card-header ${plano.corCabecalho}`}>
                                    <h3 className="mb-0">{plano.nome}</h3>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    {isPromoActive && (
                                        <h4 className="text-muted text-decoration-line-through">{plano.precoOriginal}</h4>
                                    )}
                                    <h3>{isPromoActive ? plano.precoPromocional : plano.precoOriginal}</h3>
                                    <p className="mb-3">{plano.descricao}</p>

                                    <ul className="list-unstyled flex-grow-1 text-start">
                                        {plano.itens.map((item, i) => {
                                            const isIndisponivel = item.icone.type === FaTimes;

                                            return (
                                                <li key={i} className="d-flex align-items-center mb-2">
                                                    <span className="me-2">{item.icone}</span>
                                                    <span className={isIndisponivel ? "text-decoration-line-through text-line" : ""}>
                                                        {item.texto}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className="mt-auto">
                                        <a href={plano.link} className={`btn w-100 mt-3 ${plano.corBotao} fw-bold`}>
                                            Quero este plano
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
