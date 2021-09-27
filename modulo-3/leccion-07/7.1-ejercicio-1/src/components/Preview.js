import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Main from "./Main";

function Preview(paymentType) {
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };
  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {name}</li>
        <li>Email: {email}</li>
        <li>Región: {region}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
        <li>
          Has aceptado nuestros términos legales:{" "}
          {legalTerms === true ? "Sí" : "No"}
        </li>
      </ul>
    </div>
  );
}

export default Preview;
