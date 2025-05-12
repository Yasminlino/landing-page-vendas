import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./Rodape.css";
import logo from "../../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="section1 text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Coluna com texto */}
          <div className="col-md-7 mb-4 mb-md-0">
            <h5>Evolution House Sports</h5>
            <p className="text-transparent mb-3">
              Transforme sua vida com o método que já ajudou milhares de pessoas a emagrecer com saúde.
            </p>
            <p className="mb-1">Rua Cid Campelo, 188 - Cidade Industrial, Curitiba - PR, 01234-567</p>
            <p className="mb-0">CNPJ: 12.345.678/0001-90</p>
          </div>

          {/* Coluna com logo */}
          <div className="col-md-5 text-md-end text-center">
            <img src={logo} alt="Logo" className="logo-footer" />
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
                rel="noreferrer"
                className="text-light fs-5"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://youtube.com/@fabriciometododaevolucao"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
              >
                <FaYoutube />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-light fs-5"
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
