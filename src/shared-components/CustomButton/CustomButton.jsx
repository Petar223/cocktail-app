import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.css";

const CustomButton = ({ to, children }) => {
  return (
    <div className="custom-button-wrapper">
      <Link to={to} className="custom-button">
        {children}
      </Link>
    </div>
  );
};

export default CustomButton;
