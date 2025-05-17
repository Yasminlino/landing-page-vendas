import React, { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiMaximize2 } from "react-icons/fi";

import img1 from "../../../assets/images/depoimentos/a.webp";
import img2 from "../../../assets/images/depoimentos/b.webp";
import img3 from "../../../assets/images/depoimentos/c.webp";
import img4 from "../../../assets/images/depoimentos/d.webp";
import img5 from "../../../assets/images/depoimentos/e.webp";
import img6 from "../../../assets/images/depoimentos/f.webp";
import img7 from "../../../assets/images/depoimentos/g.webp";
import img8 from "../../../assets/images/depoimentos/h.webp";
import img9 from "../../../assets/images/depoimentos/i.webp";

import "./Depoimento.css";

const depoimentos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Depoimentos() {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
    }
  };

  return (
    <section className="section1 py-5 position-relative">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 mb-3 color-white">
              Depoimentos Reais, Resultados Reais
            </h2>
            <p className="lead color-white">
              Não são promessas vazias. São mensagens reais de quem já começou
              sua jornada de transformação e viu a balança, a autoestima e a
              vida mudarem de verdade.
            </p>
          </div>
        </div>
      </div>

      <div className="position-relative depoimentos-carousel-wrapper">
        <button onClick={handlePrev} className="carousel-btn prev-btn" aria-label="Anterior" title="Anterior">
          <IoChevronBack size={28} color="#333" aria-hidden="true" focusable="false" />
        </button>

        <div
          ref={scrollRef}
          className="d-flex overflow-x-auto hide-scrollbar px-2 px-md-4 justify-content-center align-items-center"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            gap: "1rem",
          }}
        >
          {depoimentos.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 carrossel-img-container"
              style={{
                width: isMobile ? "85vw" : "400px",
                maxWidth: "95vw",
                scrollSnapAlign: "center",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                background: "rgba(0,0,0,0.15)",
                borderRadius: "14px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                padding: isMobile ? "10px" : "18px",
              }}
            >
              <img
                src={img}
                alt={`Depoimento ${idx + 1}`}
                className="img-antes-depois"
                style={{
                  width: "100%",
                  height: isMobile ? "260px" : "340px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  background: "#fff",
                }}
                loading="lazy"
                decoding="async"
              />
              <button
                onClick={() => setSelectedImage(img)}
                className="zoom-icon"
                aria-label="Ampliar imagem de depoimento"
                title="Ampliar imagem de depoimento"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "none",
                  borderRadius: "50%",
                  padding: "6px",
                  cursor: "pointer",
                  zIndex: 999,
                }}
              >
                <FiMaximize2 size={20} color="#fff" aria-hidden="true" focusable="false" />
              </button>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="modal d-flex justify-content-center align-items-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 1050,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Imagem ampliada do depoimento"
              className="img-fluid rounded"
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                objectFit: "contain",
              }}
            />
          </div>
        )}

        <button onClick={handleNext} className="carousel-btn next-btn" aria-label="Próximo" title="Próximo">
          <IoChevronForward size={28} color="#333" aria-hidden="true" focusable="false" />
        </button>
      </div>
    </section>
  );
}