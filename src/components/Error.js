import React from "react";
import "./error.css";

export const Error = ({ error }) => {
  return (
    <div className="error-section">
      Te falta rellenar el campo <span>{error}</span>
    </div>
  );
};
