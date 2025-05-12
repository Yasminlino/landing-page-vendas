import React, { useRef, useEffect } from "react";
import img1 from "../../../assets/images/depoimentos/a.jpg";
import img2 from "../../../assets/images/depoimentos/b.jpg";
import img3 from "../../../assets/images/depoimentos/c.jpg";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./Depoimento.css";

const depoimentos = [img1, img2, img3];

export default function Depoimentos() {
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
      <div className="container transparent">
        <div className="row justify-content-center mb-4 transparent">
          <div className="col-lg-8 text-center transparent">
            <h2 className="display-5 mb-3 color-white">Depoimentos Reais, Resultados Reais</h2>
            <p className="lead color-white">Não são promessas vazias. São mensagens reais de quem já começou sua jornada de transformação e viu a balança, a autoestima e a vida mudarem de verdade.</p>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <button onClick={handlePrev} className="carousel-btn prev-btn">
          <IoChevronBack size={28} className="transparent" color="#333" />
        </button>
        <div
          ref={scrollRef}
          className="d-flex overflow-hidden hide-scrollbar gap-3 px-4"
          style={{
            scrollSnapType: "none",
            whiteSpace: "nowrap",
          }}
        >
          {[...depoimentos, ...depoimentos].map((img, idx) => (
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
          <IoChevronForward size={28} className="transparent" color="#333" />
        </button>
      </div>
      <div className="d-flex justify-content-center mt-5 text-centerb btn-depoimento">
          <a href="#precos" className="botaoPrincipal">
            Quero Evoluir Agora
          </a>
        </div>
    </section>
  );
}


// export default function Depoimentos() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <section className="py-5 section1">
//       <div className="container">
//         <div className="row justify-content-center mb-4">
//           <div className="col-lg-8 text-center">
//             <h2 className="display-5 mb-3 color-white">Depoimentos de Sucesso</h2>
//             <p className="lead color-white">Veja como o nosso método transformou a vida de milhares de pessoas.</p>
//           </div>
//         </div>

//         <div className="row justify-content-center g-4">
//           {depoimentos.map((img, index) => (
//             <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
//               <div
//                 className="card h-100 border-0 shadow-sm"
//                 onClick={() => setSelectedImage(img)}
//                 style={{ cursor: "pointer" }}
//               >
//                 <img
//                   src={img}
//                   alt={`Imagem de depoimento ${index + 1}`}
//                   className="img-fluid rounded"
//                   style={{ height: "300px", objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal para exibir a imagem em tamanho maior */}
//         {selectedImage && (
//           <div
//             className="modal d-flex justify-content-center align-items-center"
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.8)",
//               zIndex: 1050,
//             }}
//             onClick={() => setSelectedImage(null)}
//           >
//             <img
//               src={selectedImage}
//               alt="Imagem ampliada do depoimento"
//               className="img-fluid rounded"
//               style={{ maxHeight: "90%", maxWidth: "90%" }}
//             />
//           </div>
//         )}
        
//       </div>
//     </section>
//   );
// }
