import React, { useState } from 'react';
import { FaYoutube } from "react-icons/fa";
import imgCapa from "../../../assets/images/Capa-video.webp"

export default function YoutubeLazyEmbed() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const videoId = "t0KdsgT-DG4";

  const loadIframe = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="container">
      <div className="ratio ratio-16x9 youtube-video position-relative">
        {!isIframeLoaded ? (
          <div
            className="youtube-placeholder"
            onClick={loadIframe}
            style={{
              backgroundImage: `url(${imgCapa})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              width: '100%',
              height: '100%',
            }}
          >

            <button
              className="play-button"
              aria-label="Play video"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '48px',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                padding: '12px',
              }}
            >
              <FaYoutube style={{ color: '#c90707' }} />
            </button>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Vídeo"
            allowFullScreen
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      <p className="caption text-center mt-3">
        Criado por Fabrício de Sousa, ex-gordo, atleta e mentor de centenas de pessoas com resultados comprovados.
      </p>
    </div>
  );
}
