import React from "react";
import "./error.css";

export const Error = ({ error }) => {
  return (
    <div className="error-section">
      {error === "Nombre" || error === "Numero"
        ? `Te falta rellenar el campo ${error}`
        : "El numero ingresado ya existe"}
    </div>
  );
};
