import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./Rodape.css";

export default function Footer() {
  return (
    <footer className="section1 text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna com texto */}
          <div className="col-md-7 mb-4 mb-md-0">
            <h4>Evolution House Sports</h4>
            <p className="text-transparent mb-3">
              Transforme sua vida com o método que já ajudou milhares de pessoas a emagrecer com saúde.
            </p>
            <p className="mb-1">
              R. Des. Cid Campelo, 3888 - Cidade Industrial de Curitiba, Curitiba - PR, 81170-350
            </p>
            <p className="mb-0">CNPJ: 53.266.869/0001-49</p>
          </div>

          {/* Coluna com logo */}
          <div className="col-md-5 text-md-end text-center">
            <img
              alt="Logo Evolution House Sports"
              className="logo-footer"
              src={`${process.env.PUBLIC_URL}/static/media/logo-128.webp`}
              srcSet={`
                ${process.env.PUBLIC_URL}/static/media/logo-64.webp 64w,
                ${process.env.PUBLIC_URL}/static/media/logo-128.webp 128w
              `}
              sizes="(max-width: 600px) 64px, 128px"
              width="128"
              height="128"
              loading="lazy"
            />
          </div>
        </div>

        {/* Linha final com direitos e ícones */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-4 border-top">
          <p className="mb-2 mb-md-0">© 2021 Company, Inc. Todos os direitos reservados.</p>
          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <a
                href="https://www.instagram.com/evolutionsportsstudio/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light fs-5"
                aria-label="Instagram da Evolution House Sports"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://youtube.com/@fabriciometododaevolucao"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light fs-5"
                aria-label="YouTube da Evolution House Sports"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://api.whatsapp.com/send/?phone=5541997258589&text=Ol%C3%A1%2C+Poderia+esclarecer+algumas+d%C3%BAvidas+sobre+o+m%C3%A9todo%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer noopener"
                className="text-light fs-5"
                aria-label="WhatsApp da Evolution House Sports"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
