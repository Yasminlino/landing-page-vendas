import React, { useRef, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import img1 from "../../../assets/images/carrossel/a.webp";
import img2 from "../../../assets/images/carrossel/b.webp";
import img3 from "../../../assets/images/carrossel/c.webp";
import img4 from "../../../assets/images/carrossel/d.webp";
import img5 from "../../../assets/images/carrossel/e.webp";
import img6 from "../../../assets/images/carrossel/f.webp";
import img7 from "../../../assets/images/carrossel/g.webp";
import img8 from "../../../assets/images/carrossel/h.webp";
import img9 from "../../../assets/images/carrossel/i.webp";
import img10 from "../../../assets/images/carrossel/j.webp";
import img11 from "../../../assets/images/carrossel/k.webp";
import img12 from "../../../assets/images/carrossel/l.webp";
import img13 from "../../../assets/images/carrossel/m.webp";
import img14 from "../../../assets/images/carrossel/n.webp";
import img15 from "../../../assets/images/carrossel/o.webp";
import "./AntesEDepois.css";

const imagens = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12, img13, img14, img15
];

export default function AntesEDepois() {
  const scrollRef = useRef(null);
  const itemWidth = 420;

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += itemWidth;
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= itemWidth;
  };

  return (
    <section className="py-5 position-relative">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 mb-3 color-white">Veja o antes e depois de alguns de nossos alunos:</h2>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <button onClick={handlePrev} className="carousel-btn prev-btn">
          <IoChevronBack size={28} color="#333" />
        </button>
        <div
          ref={scrollRef}
          className="d-flex overflow-hidden hide-scrollbar gap-3 px-4"
          style={{
            scrollSnapType: "none",
            whiteSpace: "nowrap",
          }}
        >
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
        <button onClick={handleNext} className="carousel-btn next-btn">
          <IoChevronForward size={28} color="#333" />
        </button>
      </div>
    </section>
  );
}
