import React, { useRef, useEffect } from "react";
import img1 from "../../../assets/images/carrossel/a.jpg";
import img2 from "../../../assets/images/carrossel/b.jpg";
import img3 from "../../../assets/images/carrossel/c.jpg";
import img4 from "../../../assets/images/carrossel/d.jpg";
import img5 from "../../../assets/images/carrossel/e.jpg";
import img6 from "../../../assets/images/carrossel/f.jpg";
import img7 from "../../../assets/images/carrossel/g.jpg";
import img8 from "../../../assets/images/carrossel/h.jpg";
import img9 from "../../../assets/images/carrossel/i.jpg";
import img10 from "../../../assets/images/carrossel/j.jpg";
import img11 from "../../../assets/images/carrossel/k.jpg";
import img12 from "../../../assets/images/carrossel/l.jpg";
import "./AntesEDepois.css";

const imagens = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

export default function AntesEDepois() {
  const scrollRef = useRef(null);

  // Movimento contínuo do carrossel
  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        // Se atingir o final, volta ao início
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1; // Move suavemente para a direita
        }
      }
    };

    const interval = setInterval(scroll, 20); // Ajuste a velocidade aqui (menor valor = mais rápido)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section className="py-5 position-relative">
      <div className="row justify-content-center mb-4 transparent">
        <div className="col-lg-8 text-center transparent">
          <h2 className="display-5 mb-3">Veja o antes e depois de alguns de nossos alunos:</h2>
        </div>
      </div>
      <div className="position-relative">
        <div
          ref={scrollRef}
          className="d-flex overflow-hidden hide-scrollbar gap-3 px-4"
          style={{
            scrollSnapType: "none", // Desativa o snap para rolagem contínua
            whiteSpace: "nowrap", // Garante que as imagens fiquem em linha
          }}
        >
          {/* Duplicamos as imagens para criar o efeito de continuidade */}
          {[...imagens, ...imagens].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 carrossel-img-container"
            >
              <img
                src={img}
                alt={`Antes e depois do aluno ${idx + 1}`}
                className="img-fluid rounded"
                style={{
                  height: "30rem",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}