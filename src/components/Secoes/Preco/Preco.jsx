import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import './Preco.css';

export default function Preco({ timeLeft }) {
    const planos = [
        {
            nome: "Plano Básico",
            id: "basic",
            precoOriginal: "R$ 97,90",
            precoPromocional: "R$ 57,90",
            descricao: "Acesso ao método completo por 1 mês.",
            itens: [
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Curso em vídeos" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Planilha de cálculo metabólico" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "E-book de receitas" },
                { icone: <FaTimes className="icone-vermelho" aria-hidden="true" />, texto: "4 mentorias em grupo (em 30 dias)" },
                { icone: <FaTimes className="icone-vermelho" aria-hidden="true" />, texto: "Acesso ao grupo de whatsapp" },
                { icone: <FaTimes className="icone-vermelho" aria-hidden="true" />, texto: "Aplicativo de treinos" },
                { icone: <FaTimes className="icone-vermelho" aria-hidden="true" />, texto: "Áudios motivacionais" }
            ],
            corCabecalho: "bg-warning text-dark",
            corBotao: "btn-warning",
            link: "https://sun.eduzz.com/Z0B5KZYJWA?cupom=ARRAIAEVOLUTIONBASIC"
        },
        {
            nome: "Plano Intermediário",
            id: "intermediary",
            precoOriginal: "R$ 297,90",
            precoPromocional: "R$ 148,90",
            descricao: "Acesso ao método completo por 3 meses.",
            itens: [
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Curso em vídeos" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Planilha de cálculo metabólico" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "E-book de receitas" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "4 mentorias em grupo (em 30 dias)" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Acesso ao grupo de whatsapp" },
                { icone: <FaTimes className="icone-vermelho" aria-hidden="true" />, texto: "Aplicativo de treinos" },
                { icone: <FaTimes className="icone-vermelho" aria-hidden="true" />, texto: "Áudios motivacionais" }
            ],
            corCabecalho: "bg-primary",
            corBotao: "btn-dark",
            link: "https://sun.eduzz.com/8WPAPQRQWP?cupom=ARRAIAEVOLUTIONINTERMEDIARY"
        },
        {
            nome: "Plano Premium",
            id: "premium",
            precoOriginal: "R$ 497,90",
            precoPromocional: "R$ 197,90",
            descricao: "Acesso ao método completo por 3 meses.",
            itens: [
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Curso em vídeos" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Planilha de cálculo metabólico" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "E-book de receitas" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "8 mentorias em grupo (em 30 dias)" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Acesso ao grupo de whatsapp" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Aplicativo de treinos" },
                { icone: <FaCheck className="corLaranja" aria-hidden="true" />, texto: "Áudios motivacionais" }
            ],
            corCabecalho: "bg-success text-white",
            corBotao: "btn-success",
            link: "https://sun.eduzz.com/G961JNG5W1?cupom=ARRAIAEVOLUTIONPREMIUM"
        }
    ];

    const isPromoActive =
        timeLeft.days > 0 ||
        timeLeft.hours > 0 ||
        timeLeft.minutes > 0 ||
        timeLeft.seconds > 0;

    return (
        <section className="py-5 text-center sectionPreco bg-black text-white">
            <div className="container" id="precos">
                <h2 className="mb-4">Escolha o plano ideal para você</h2>
                <p className="mb-5">
                    Transforme sua vida com o método que já ajudou milhares de pessoas a emagrecer com saúde.
                </p>
                <div className="row">
                    {planos.map((plano, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm d-flex flex-column card-preco bg-dark text-white">
                                <div className={`card-header ${plano.corCabecalho}`}>
                                    <h3 className="mb-0 fw-bold">{plano.nome}</h3>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    {isPromoActive && (
                                        <p className="mb-1">
                                            <del className="text-secondary">{plano.precoOriginal}</del>
                                        </p>
                                    )}
                                    <p className="mb-3 fs-4 fw-bold">
                                        {isPromoActive ? plano.precoPromocional : plano.precoOriginal}
                                    </p>
                                    <p className="mb-3">{plano.descricao}</p>

                                    <ul className="list-unstyled flex-grow-1 text-start">
                                        {plano.itens.map((item, i) => {
                                            const isIndisponivel = item.icone.type === FaTimes;
                                            return (
                                                <li key={i} className="d-flex align-items-center mb-2">
                                                    <span className="me-2">{item.icone}</span>
                                                    <span className={isIndisponivel ? "text-decoration-line-through" : ""}>
                                                        {item.texto}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className="mt-auto">
                                        <a href={plano.link} id={`btn-${plano.id}`} className={`btn w-100 mt-3 ${plano.corBotao} fw-bold`}>
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
