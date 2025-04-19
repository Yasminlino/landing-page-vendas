import React, { useEffect } from "react";
import './Preco.css';

const PaymentButton = ({ preferenceId }) => {
  useEffect(() => {
    if (!preferenceId) return;

    const script = document.createElement("script");
    script.src = "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
    script.setAttribute("data-preference-id", preferenceId);
    script.setAttribute("data-source", "button");

    const containerId = `mercado-pago-button-${preferenceId}`;
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = ""; // evita duplicação
      container.appendChild(script);
    } else {
      console.error(`Container com id '${containerId}' não encontrado.`);
    }
  }, [preferenceId]);

  if (!preferenceId) {
    return <p className="text-danger">Erro: ID de pagamento ausente</p>;
  }

  return <div id={`mercado-pago-button-${preferenceId}`}></div>;
};

export default PaymentButton;
