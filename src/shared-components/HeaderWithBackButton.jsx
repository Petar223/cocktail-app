import React from "react";
import "./HeaderWithBackButton.css";

function HeaderWithBackButton({ title, buttonText, onBackClick }) {
  return (
    <div className="header-content">
      <h2>{title}</h2>
      <button onClick={onBackClick} className="back-button">
        {buttonText}
      </button>
    </div>
  );
}

export default HeaderWithBackButton;
