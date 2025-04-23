import React from "react";

export default function PerguntasFrequentes() {
    return (
        <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 color-white">Perguntas Frequentes</h2>
          <div className="accordion" id="faqAccordion">
           
            {/* Pergunta 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  É só para emagrecer?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">Não. Também ajuda com definição, energia e performance.</div>
              </div>
            </div>

            {/* Pergunta 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Tem cardápio pronto?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">Sim. Um plano alimentar prático e adaptado à sua rotina.</div>
              </div>
            </div>

            {/* Pergunta 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Quanto tempo leva para ver resultados?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">Com o comprometimento, você pode ver resultados em 30 dias.</div>
              </div>
            </div>

            {/* Pergunta 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  Preciso de equipamentos para os treinos?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">Não. Os treinos podem ser feitos com o peso do corpo ou com equipamentos simples, dependendo da adaptação.</div>
              </div>
            </div>

            {/* Pergunta 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                  O que acontece após o término do programa?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse">
                <div className="accordion-body">Existem opções de acompanhamento contínuo para manter os resultados conquistados e ajustar conforme necessário.</div>
              </div>
            </div>

            {/* Pergunta 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                  O programa inclui acompanhamento ou suporte?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse">
                <div className="accordion-body">Sim. O programa inclui acompanhamento personalizado e suporte online para tirar dúvidas.</div>
              </div>
            </div>

            {/* Pergunta 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                  Qual o custo do programa?
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse">
                <div className="accordion-body">O custo do programa depende do plano escolhido, mas oferecemos opções de pagamento acessíveis e com ótimo custo-benefício.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
