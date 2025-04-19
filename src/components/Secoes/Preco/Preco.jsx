import React from "react";
import './Preco.css';
import PaymentButton from "./PaymentButton";

export default function Preco() {
    const planos = [
        {
            nome: "Plano Básico",
            preco: "R$ 199",
            descricao: "Acesso ao método completo por 1 mês.",
            itens: [
                "✔ Treinos personalizados",
                "✔ Plano alimentar básico",
                "✔ Suporte via e-mail"
            ],
            corCabecalho: "bg-warning",
            corBotao: "btn-warning",
            preferenceId: "1601361397-3c177a85-66d7-4d87-9d39-3ab9cf999d46"
        },
        {
            nome: "Plano Intermediário",
            preco: "R$ 399",
            descricao: "Acesso ao método completo por 3 meses.",
            itens: [
                "✔ Treinos personalizados",
                "✔ Plano alimentar avançado",
                "✔ Suporte via WhatsApp"
            ],
            corCabecalho: "bg-dark",
            corBotao: "btn-dark",
            preferenceId: "PREFERENCE_ID_INTERMEDIARIO"
        },
        {
            nome: "Plano Premium",
            preco: "R$ 599",
            descricao: "Acesso ao método completo por 6 meses.",
            itens: [
                "✔ Treinos personalizados",
                "✔ Plano alimentar premium",
                "✔ Suporte 24/7",
                "✔ Consultoria individual"
            ],
            corCabecalho: "bg-success",
            corBotao: "btn-success",
            preferenceId: "PREFERENCE_ID_PREMIUM"
        }
    ];

    return (
        <section className="py-5 text-center sectionPreco">
            <div className="container transparent">
                <h2 className="mb-4 transparent texto-preto">Escolha o plano ideal para você</h2>
                <p className="mb-5 transparent texto-preto-transparent">
                    Transforme sua vida com o método que já ajudou milhares de pessoas a emagrecer com saúde.
                </p>
                <div className="row transparent">
                    {planos.map((plano, index) => (
                        <div className="col-md-4 mb-4 transparent" key={index}>
                            <div className="card h-100 shadow-sm d-flex flex-column transparent">
                                <div className={`card-header ${plano.corCabecalho}`}>
                                    <h3 className="mb-0 transparent text-white">{plano.nome}</h3>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h4 className="card-title text-white">{plano.preco}</h4>
                                    <p className="card-text">{plano.descricao}</p>
                                    <ul className="list-unstyled flex-grow-1">
                                        {plano.itens.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <PaymentButton preferenceId={plano.preferenceId} />
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
