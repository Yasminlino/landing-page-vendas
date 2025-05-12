import React from "react";
import "./PerguntasFrequentes.css";

export default function PerguntasFrequentes() {
    return (
        <section className="section1 py-5">
        <div className="container">
          <h2 className="text-center mb-5 color-white">Perguntas Frequentes</h2>
          <div className="accordion" id="faqAccordion">
           
            {/* Pergunta 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Em quanto tempo começo a ver resultados?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse">
                <div className="accordion-body">Muitos alunos relatam mudanças visíveis já na primeira semana, especialmente na disposição, desinchaço e motivação. Os resultados variam de acordo com sua dedicação e constância ao seguir o método.</div>
              </div>
            </div>

            {/* Pergunta 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Não gosto de academia. Esse método é pra mim?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">Sim! O foco é te ensinar a emagrecer com um plano adaptável. O exercício é importante, mas o método funciona mesmo para quem treina em casa ou está começando do zero.</div>
              </div>
            </div>

            {/* Pergunta 3*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTree">
                  O método serve para homens e mulheres?
                </button>
              </h2>
              <div id="collapseTree" className="accordion-collapse collapse">
                <div className="accordion-body">Sim, o Método Evolution já foi aplicado com sucesso em centenas de pessoas, de diferentes idades, gêneros e rotinas. Ele é adaptável e tem foco em resultados reais para pessoas reais.</div>
              </div>
            </div>

            {/* Pergunta 4*/}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Tem acompanhamento individual?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">Este produto é um programa educativo com todo o passo a passo que eu utilizei para perder 30kg. O acompanhamento personalizado está disponível em outros formatos que apresento após a compra, caso você queira dar esse próximo passo.</div>
              </div>
            </div>

            {/* Pergunta 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  Já tentei de tudo e nunca consegui emagrecer. Por que esse método seria diferente?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">Porque ele não é uma fórmula mágica, e sim um processo validado na prática. Você vai aprender a construir resultados reais, com estratégia, clareza e um passo a passo que já funcionou para muitas pessoas que também achavam que não conseguiriam.</div>
              </div>
            </div>

            {/* Pergunta 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                  Eu tenho pouco tempo por dia. Ainda assim consigo aplicar o método?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse">
                <div className="accordion-body">Sim. O método é feito para quem tem uma rotina corrida. Você vai aprender como encaixar cada etapa dentro da sua realidade, sem precisar viver em função de treino ou alimentação.</div>
              </div>
            </div>

            {/* Pergunta 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                  Como o conteúdo do curso é entregue?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse">
                <div className="accordion-body">Assim que a compra for aprovada, você recebe um e-mail com o acesso imediato à plataforma, onde poderá assistir às aulas e acessar todos os materiais pelo celular ou computador, no seu tempo.</div>
              </div>
            </div>

            {/* Pergunta 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                  Por quanto tempo terei acesso ao conteúdo?
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse">
                <div className="accordion-body">Você terá acesso por 3 meses, podendo rever as aulas quantas vezes quiser, no seu ritmo</div>
              </div>
            </div>

            {/* Pergunta 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                  Posso fazer mesmo sem nunca ter treinado ou feito dieta antes?
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse">
                <div className="accordion-body">Sim! O método foi criado justamente para quem não sabe por onde começar e precisa de uma orientação clara, segura e fácil de aplicar.</div>
              </div>
            </div>

            {/* Pergunta 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen">
                  O método serve para quem já emagreceu e quer manter os resultados?
                </button>
              </h2>
              <div id="collapseTen" className="accordion-collapse collapse">
                <div className="accordion-body">Serve perfeitamente! Muitos alunos usam o conteúdo para evitar o efeito sanfona e manter o equilíbrio sem voltar ao ponto de partida.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
