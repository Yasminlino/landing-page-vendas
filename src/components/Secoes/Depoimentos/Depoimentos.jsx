import React, { useState } from "react";
import img1 from "../../../assets/images/depoimentos/a.jpg";
import img2 from "../../../assets/images/depoimentos/b.jpg";
import img3 from "../../../assets/images/depoimentos/c.jpg";

export default function Depoimentos() {
  const depoimentos = [img1, img2, img3];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-5 section1">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 mb-3 color-white">Depoimentos de Sucesso</h2>
            <p className="lead color-white">Veja como o nosso método transformou a vida de milhares de pessoas.</p>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {depoimentos.map((img, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div
                className="card h-100 border-0 shadow-sm"
                onClick={() => setSelectedImage(img)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img}
                  alt={`Imagem de depoimento ${index + 1}`}
                  className="img-fluid rounded"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal para exibir a imagem em tamanho maior */}
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
              style={{ maxHeight: "90%", maxWidth: "90%" }}
            />
          </div>
        )}
        <div className="d-flex justify-content-center mt-5 text-center">
          <a href="#precos" className="botaoPrincipal">
            Quero Evoluir Agora
          </a>
        </div>
      </div>
    </section>
  );
}
